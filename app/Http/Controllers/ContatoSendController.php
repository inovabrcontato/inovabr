<?php

namespace App\Http\Controllers;

use App\Mail\ContatoMail;
use App\Models\Contact;
use App\Models\ContactFail;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;


class ContatoSendController extends Controller
{

    public function verify(Request $request) {

        $client = new Client();

        try {

            $response = $client->post('https://www.google.com/recaptcha/api/siteverify', [
                'form_params' => [
                    'secret' => config('services.recaptcha.secret'),
                    'response' => $request->token,
                ]
            ]);

            $result = json_decode($response->getBody(), true);

            if($result['success'] && $result['score'] >= 0.5)
            {
                $ip        = $request->ip();
                $userAgent = $request->userAgent();
                $datos     = $request->only('name', 'email', 'message');

                // Crear el registro
                $contact = Contact::create([
                    'name'      => $request->input('name'),
                    'email'     => $request->input('email'),
                    'message'   => $request->input('message'),
                    'ip'        => $request->ip(), // Guarda la IP del usuario
                    'agent'     => $request->userAgent(), // Guarda el User-Agent
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'Obrigado por entrar em contato! Em breve retornaremos sua mensagem.',

                ]);

            } else {

                ContactFail::create([
                    'ip' => $request->ip(),
                    'agent' => $request->userAgent(),
                    'score' => $result['score'],
                ]);

                return response()->json([
                    'success' => false,
                    'error' => 'Verificación reCAPTCHA fallida, no se puede enviar el formulario.',
                ], 200);
            }

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => 'Error al conectar con reCAPTCHA.',
                'message' => $e->getMessage(),
            ], 500);
        }

    }

    public function sendEmail($datos)
    {

        try {
            Mail::to('jmillan@clent.cl')->send(new ContatoMail($datos));

            return [
                'success' => true,
                'message' => 'Formulario recibido correctamente. ContatoSendController',
            ];

        } catch (Exception $e) {
            return ['success' => false, 'error' => 'Error al enviar el correo...', 'detalle' => $e->getMessage()];
        }
    }


    public function index(Request $request) {

        $datos = $request->only('nombre', 'email', 'comentario');

        try {
            Mail::to('jmillan@clent.cl')->send(new ContatoMail($datos));

            return response()->json([
                'message' => 'Formulario recibido correctamente. ContatoSendController',
                'data2' => $datos
            ]);

        } catch (Exception $e) {
            return response()->json(['error' => 'Error al enviar el correo...', 'detalle' => $e->getMessage()]);
        }
    }
}
