const txtScore1 = document.querySelector("#txtScore1");
const txtScore2 = document.querySelector("#txtScore2");
const txtScore3 = document.querySelector("#txtScore3");
const btnAverage = document.querySelector("#btnAverage");
const txtResult = document.querySelector("#txtResult");

btnAverage.addEventListener("click", ()=>{
    //degerleri score larin icine atamis olduk
    const score1 = txtScore1.value;
    const score2 = txtScore2.value;
    const score3 = txtScore3.value;
//burda asagidaki fonksiyonlari cagiricaz valid olup olmama durumuna göre kontrol yapiyoruz
//bir tanesi bile valid degilse o zaman valid bi score girin diyoruz
    if(!isScoreValid(score1) || !isScoreValid(score2) || !isScoreValid(score3)){
        alert("Please enter valid scores");
        return;
    }
//burda eger degerler valid ise ortalamalarini aliyourz
    const average = getAverage(score1, score2, score3);
    const letter = convertScoreToLetter(average);
    txtResult.innerHTML = `Average is ${average.toFixed(0)} (${letter})`;
});


//alinan score degerleri valid mi degil mi onu kontrol ediyoruz.Burda biz true ya göre ilerledik
//score ise yani ici dolu undefined degilse false degilse null degilse 
//not a number degilde yani rakamsa, ve 0 ile 100 arasinda ise
//0 burda problem cünkü sifir false olucakve false dönücek 
const isScoreValid = (score) => { 
    return score && !isNaN(score) && score<=100 && score>=0;
}
//ortalama alacak fonksiyonumuz bu hicbiyere bagimliligi yok
const getAverage = (num1, num2, num3) => { 
    return (Number(num1)+Number(num2)+Number(num3))/3;
}
//ve kendisine gelen score u harfe cevirecek olan fonksiyon
const convertScoreToLetter = (score) => { 
    let letter = "";//bunun icin bir harf degiskeni tanittik once
    if(score>=90 && score<=100){
        letter = "A";
    }
    else if(score>=80 && score<90){
        letter = "B";
    }
    else if(score>=70 && score<80){
        letter="C";
    }
    else if(score>=50 && score<70){
        letter="D";
    }
    else if(score>=0 && score<50){
        letter = "F";
    }
    return letter;
}