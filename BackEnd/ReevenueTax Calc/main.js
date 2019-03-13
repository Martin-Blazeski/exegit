

/*

    function calculateTax(type) {
      var income = document.getElementById("income").value;
    
      if (income > 1000) {
          result =(income - 1000) * 1.18 + ((1000 * 1.11)-income);
      } else if (income < 1000) {
          result = (income * 1.11)-income;
     
        }  if (type === "craftsman" && income >1000) {
        result =(income - 1000) * 1.10 + ((1000 * 1.05)-income);
      }else if(type === "craftsman" && income < 1000) {
        result= (income * 1.05)-income;
      }
      
      
      
    }
    calculateTax();
     // var danokSmetaj = calculateTax(2200,"craftsman");
     // var danokSmetaj2 = calculateTax(2200);//
      
*/
  

      function calculateTax(income, type) {
        var income = document.getElementById("income").value;
        
        if (income > 1000) {
            result =(income - 1000) * 1.18 + ((1000 * 1.11)-income);
            document.getElementById("tax").value = Math.round(result);
        } else if (income < 1000) {
            result = (income * 1.11)-income;
            document.getElementById("tax").value = Math.round (result);
       
          }  if (type === "craftsman" && income >1000) {
          result =(income - 1000) * 1.10 + ((1000 * 1.05)-income);
          document.getElementById("tax").value = (result);
        }else if(type === "craftsman" && income < 1000) {
          result= (income * 1.05)-income;
          document.getElementById("tax").value = Math.round  (result);
        }
        
        
        
      }
      calculateTax();
  
      