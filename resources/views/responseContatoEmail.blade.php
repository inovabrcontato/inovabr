<h2>Olá {{env('APP_CONTATO')}},</h2>

<p>Você recebeu uma nova mensagem através do formulário de contato do seu site.</p>
<p><strong>Nome:</strong> {{ $datos['name'] }} </p>
<p><strong>E-mail:</strong> {{ $datos['email'] }} </p>
<p><strong>Mensagem:</strong> {{ $datos['message'] }} </p>

<p>Por favor, responda o mais breve possível.</p>

<p>Atenciosamente,</p>
<p>{{env('APP_NAME')}}</p>