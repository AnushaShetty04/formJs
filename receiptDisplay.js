window.onload = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const qty = url.searchParams.get("quantity");
    const tagline = url.searchParams.get("Tagline");
    const email=url.searchParams.get("email-id");
    const address=url.searchParams.get("address");
    const logo=url.searchParams.get("Logo");
    const color=url.searchParams.get("color");
    const material=url.searchParams.get("material");
    const delieveryDate=url.searchParams.get("delievery_date");

    var currentdate = new Date();
    
    document.getElementById("hello").innerHTML= "Your order is placed for"+ " " +qty+" "+color+" "+material+" tshirts with "+logo+" Logo on"+" "+currentdate.toDateString();
    document.getElementById("email").innerHTML="We will send your order on "+delieveryDate+" at "+address;
    document.getElementById("details").innerHTML="\nWe will contact you on"+ " "+email;
}