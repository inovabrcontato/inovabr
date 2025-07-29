<h1>Olá {{$name}}!</h1>
<p>Agradecemos seu contato. Recebemos sua mensagem e entraremos em contato em breve.</p>
<p>Nossa equipe analisará sua solicitação e responderá o mais breve possível.</p>
<p>Tenha um ótimo dia!</p>
<p>Atenciosamente,</p>
<p>{{env('APP_NAME')}}</p>
<!-- Agregar la imagen -->
<img src="{{ asset('images/logo-email.png') }}" alt="Logo" style="max-width: 200px; height: auto;">
