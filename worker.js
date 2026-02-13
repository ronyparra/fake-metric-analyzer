export default {  
  async fetch(request, env, ctx) {  
    if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });  
  
    try {  
      const payload = await request.json();  
      console.log('Payload recibido:', JSON.stringify(payload, null, 2));  

  
      return new Response(JSON.stringify({ status: 'ok' }), {  
        status: 200,  
        headers: { 'Content-Type': 'application/json' },  
      });  
    } catch (e) {  
      return new Response('Invalid JSON', { status: 400 });  
    }  
  },  
};