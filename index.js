const card = document.querySelectorAll(".seat");
// console.log(card);
let count = 16;
let book = 0;
let sum = 0;
let cou = 0;
for(let i = 0; i < card.length; i++){
    const cart = card[i];
    
            cart.addEventListener("click", function(event){
             
             cou += 1;
             if(cou > 4){
                return alert("CAN NOT BOOK MORE THAN 4 SEAT. THANK YOU.");
             } else {
             event.target.style.backgroundColor = '#1DD100';
             count -= 1;
             book += 1;
             
             setInnerText('avail', count)
             setInnerText('book', book)
             const title = event.target.innerText;
             const seat = document.getElementById('seat')
             const p1 = document.createElement("p");
             p1.innerText = title;
              seat.appendChild(p1); 
          
             const clas = document.getElementById('class')
             const p2 = document.createElement("p")
             p2.innerText = 'Economy';
              clas.appendChild(p2);
             
              
             const fair = document.getElementById('price')
             const p3 = document.createElement("p")
             p3.innerText = 550;
             fair.appendChild(p3);
             
             sum += 550;
             
             document.getElementById('total').innerText = sum;
             document.getElementById('grand').innerText = sum;
            
             }       
     
    });
  }
 

const dis = document.getElementById('disbtn');
dis.addEventListener('click', function() {
  const inputValue = document.getElementById("input");
  const value = inputValue.value;
  
    if(value === "Couple 20"){
        // discount
      const discount = document.getElementById('grand');
      const disAmo = sum * 0.2;
      const totalamount = sum - disAmo;
      discount.innerText = totalamount;
    
      document.getElementById("input").value = " ";
      document.getElementById('dis-container').classList.add('hidden');
    } else if(value === "NEW15") {
      const discount = document.getElementById('grand');
      const disAmo = sum * 0.15;
      const totalamount = sum - disAmo;
      discount.innerText = totalamount;
    
      document.getElementById("input").value = " ";
      document.getElementById('dis-container').classList.add('hidden');
    } else {

      alert('ERROR. PLEASE ENTER VALID CODE');

    }
    

   } );      
    
    
    


function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}

function valid(){
    var a = document.getElementById("phone").value;
    console.log(typeof(a));
    
}

