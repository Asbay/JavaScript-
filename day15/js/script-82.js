const frmLogin = document.getElementById("frmLogin");

frmLogin.addEventListener("submit", (e) => {
    e.preventDefault(); // formun submit davranışını iptal eder.yazilan ne ise butona basinca hemen gider
    //onu engellemek icin preventDefault() u kullandik
//kullanicidan bilgileri aliyoruz:
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");

    try {
         const email = txtEmail.value;
        const password = txtPassword.value;
//eger email degilse yani bossa undefined saya da null sa  yada email formatinda degilse(@isareti var mi noktasi varmi)
//regex rgular expression bi kalip hazirlayip ona göre kontrol edevbiliriz
        if(!email || !isEmail(email)) throw new Error("Please enter a valid email"); //throw hata firlatmak
        if(!password) throw new Error("Please enter your password"); 

        e.target.submit();

    } catch (err) {
        console.error(err);
        alert(err.message);
    }

    
})



const isEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;//regexr.comdan aldik
    //regex iki / arasina yazilir kural bu
    return emailRegex.test(email);//test methodu regex isleminin bir methodu burda kendisi kontrol etmis oluyor##
    //verilen kurala uygun mu degil mi diye
}