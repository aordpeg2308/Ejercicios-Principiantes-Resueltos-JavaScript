//El orden es el siguiente
//🥇 Primero -> esta fuera de ninguna promesa
// 🥈 Segundo-> Esta fuera de las promesas y debajo de esta
// ✨ Promesa 1-> Está fuera del settimeout entonces se hace antes
// 💫 Promesa 2-> igual que el de arriba
// 🕐 Timeout 1 se ejecuta despues de pasar 0
// 🤔 Promesa dentro de timeout se ejecuta despues del de arriba ya que esta dentro del time out 
// 🕑 Timeout 2



console.log('🥇 Primero');

setTimeout(() => {
    console.log('🕐 Timeout 1');
    Promise.resolve().then(() => console.log('🤔 Promesa dentro de timeout'))
    .catch(err => console.log('❌ Error en promesa dentro de timeout'));
}, 0);

Promise.resolve().then(() => {
    console.log('✨ Promesa 1');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('⏰ Timeout dentro de promesa');
            reject('❌ Error en timeout dentro de promesa');
        }, 0);
    }).catch(err => console.log(err));
});

Promise.resolve().then(() => console.log('💫 Promesa 2'));

setTimeout(async () => {
    console.log('🕑 Timeout 2');
    try {
        await new Promise((resolve, reject) => reject('❌ Error en Timeout 2')); // el await aqui para entender que esperara que la promesa se resuelva
    } catch (err) {
        console.log(err);
    }
}, 0);

console.log('🥈 Segundo');
