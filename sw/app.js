// ====================== SERVICE WORKER REGISTRATION ==================//

if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('sw/sw.js').then(function(registration){
    console.log("Service Worker Registered");
  }).catch(function(err){
    console.log("Service Worker Failed to Register", err);
  });
}