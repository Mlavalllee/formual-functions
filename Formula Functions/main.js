// Area of a Trapizoid 

// HTML elements
let AreaOutEl = document.getElementById('output');
let CalcBtnInE1 = document.getElementById('btn');
let BaseAInEl1 = document.getElementById('A');
let BaseBInEl1 = document.getElementById('B');
let HeightInEl1 = document.getElementById('H');

// Event listener
CalcBtnInE1.addEventListener('click', Calculate);

// Event Function
function Calculate() {
    
    // Get inputs
    let BaseA = +BaseAInEl1.value;
    let BaseB = +BaseBInEl1.value;
    let Height = +HeightInEl1.value;

    // Process
    let area = 1/2*(BaseA + BaseB)*Height;
    
    // Output
    AreaOutEl.innerHTML = TrapezoidFormual(BaseA, BaseB, Height);
   }
   
   // Calculate and return value
   function TrapezoidFormual(a, b, h) {
    return area = 1/2*(a + b)*h;
   }