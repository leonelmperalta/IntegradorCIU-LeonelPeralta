function ejecutarCodigo(){
    var codigo = document.getElementById("codigoEjercicio").innerText;
    var consola = document.getElementById("consolavirtual");

    (function () {
        var old = console.log;
        var logger = consola;
        console.log = function () {
          for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
            } else {
                logger.innerHTML += arguments[i] + '<br />';
            }
          }
          old.apply(console, arguments);
        }
    })();

    console.log(eval(codigo));
}