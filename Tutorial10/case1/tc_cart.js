"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Trang Phan
   Date:  06/06/2023 
   
   Filename: tc_cart.js
	
*/
var orderTotal = 0;
var cartHTML = "<table>" +
    "<tr>" +
    "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
    "</tr>";
for (var i = 0; i<item.length; i++){
var itemCost = itemPrice[i] * itemQty[i];
cartHTML += "<tr>" +
"<td><img src='tc_" + 
item[i] +
".png' alt='item' /></td>" +"<td>" + itemDescription[i]+ 
 "</td>"+"<td>$" + itemPrice[i] +
 "</td>"+"<td>"+ itemQty[i] +"</td>"+
 "<td>$"+
 itemCost+
 "</td></tr>";

orderTotal+=itemCost;
}

cartHTML += "<tr>"+
"<td colspan='4'>Subtotal</td>"+
"<td>$" + orderTotal + "</td>"+
"</tr>"+
"</table>";
console.log(cartHTML);
document.getElementById("cart").innerHTML = cartHTML;