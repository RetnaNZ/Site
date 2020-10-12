let sellButton = document.getElementById('deposit-input-button');
let buyButton = document.getElementById('spend-input-button');
let nameinputField = document.getElementById('name-input');
let amountinputField = document.getElementById('amount-input');

// IDEA: split the seperate modules
let trackerContainer=document.getElementById('trackers-container');
let stockContainer=document.getElementById('stock-container');

// IDEA: split the seperate modules

let totaldepositsAmount = document.getElementById('total-deposits');
let totalexpensesAmount = document.getElementById('total-expenses');
let totalcurrentAmount = document.getElementById('total-current');

// IDEA: split the seperate modules

let stockSellButton= document.getElementById('stockSellButton');
let soldStockContainer= document.getElementById('sold-stock-container');


// IDEA: split the seperate modules


// IDEA: POSSIBLY PUT THE ELEMENT FOR THE SELL STOCK ITEM BUTTON

// IDEA: split the seperate modules

var currentSum = 0;
var currentDeposits= 0;
var currentExpenses= 0;

var inStockItems= [];


sellButton.addEventListener('click', function(){

  if (isNaN(amountinputField.value) ) {
    alert("amount must be a number");
    return false;
  }
    else if (nameinputField.value == "") {
      alert("Please make sure, name is filled out");
      return false;
    }
      else if(!inStockItems.includes(nameinputField.value)){
        alert("The item" + nameinputField.value + " is not inStock");
        return false;
      }
      else{

    //REMOVE FROM THE IN STOCK ITEMS
    // NOTE: HAD TO DECLARE THE VARIABLE ONCE IT HAVE BEEN ESTABLISHED INSIDE THE LOOP?
      let removeFromStock= document.getElementById(nameinputField.value);

      //remove from inStock Array

      function findindexinArray(value){
        return value === nameinputField.value;
      }

      var spliceIndex = inStockItems.findIndex(findindexinArray);

      inStockItems.splice(spliceIndex, 1);

      console.log(spliceIndex);
      console.log(inStockItems);

//remove from instock container
      var soldItemDIV = document.createElement('div');
        soldItemDIV.innerHTML = removeFromStock.innerHTML;
          soldItemDIV.classList.add('soldBlock');

        //digging throught the elements one level at a time and assigning them to variables;
        var element = soldItemDIV.children[1];
            var elementdeeper = element.children[1];


      var amountDIV = document.createElement('div');
            amountDIV.classList.add('sold');
        var amountH3 = document.createElement('h3');
          amountH3.innerText = "$" +amountinputField.value;
        amountDIV.appendChild(amountH3);




        //now that I have the element selected I can remove it from the DOM structure as per normal
      elementdeeper.parentNode.removeChild(elementdeeper);

      element.appendChild(amountDIV);

      soldStockContainer.appendChild(soldItemDIV);

      removeFromStock.parentNode.removeChild(removeFromStock);



    // v PARENT BLOCK v
    var trackerBlock = document.createElement('div');

    //Styles and ID's
    trackerBlock.classList.add('tracker-block');
    trackerBlock.classList.add('positive');


    // elements of the blocks
    var nameDIV = document.createElement('div');
      var nameH3 = document.createElement('h3');
        nameH3.innerText = nameinputField.value;
      nameDIV.appendChild(nameH3);

      nameinputField.value="";

  //amount DIV creation with h3 element placed inside of it
    var amountDIV = document.createElement('div');
      var amountH3 = document.createElement('h3');
        amountH3.innerText = "+ $" +amountinputField.value;
      amountDIV.appendChild(amountH3);


      currentSum += Number(amountinputField.value);
      currentDeposits += Number(amountinputField.value);

      amountinputField.value="";

      totaldepositsAmount.innerText = currentDeposits;
      totalcurrentAmount.innerText = currentSum;

    //sum portion. h3 > div > block.
    var budgetSumDiv = document.createElement('div');
      var sumH3 = document.createElement('h3');
      sumH3.innerText = currentSum;
      budgetSumDiv.appendChild(sumH3);


  //finally puts all the seperate TRACKER divs into the TRACKER block.
    trackerBlock.appendChild(nameDIV);
    trackerBlock.appendChild(amountDIV);
    trackerBlock.appendChild(budgetSumDiv);

  //Squeezes the blocks into their containers.
    trackerContainer.appendChild(trackerBlock);

  }
})

buyButton.addEventListener('click', function(){

  if (isNaN(amountinputField.value)){
    alert("amount must be a number");
    return false;
  }
    else if (nameinputField.value == "") {
      alert("Please make sure, name is filled out");
      return false;
    }
    else if(inStockItems.includes(nameinputField.value)){
      alert("The item " + nameinputField.value + " is already inStock");
      return false;
      } else{

    // v PARENT BLOCK v
    var trackerBlock = document.createElement('div');
    var stockBlock = document.createElement('div');

    //Styles and ID's
    trackerBlock.classList.add('tracker-block');
    trackerBlock.classList.add('negative');

    stockBlock.classList.add('stockBlock');
    stockBlock.id= nameinputField.value;

    // elements of the blocks
      var nameDIV = document.createElement('div');
        var nameH3 = document.createElement('h3');
          nameH3.innerText = nameinputField.value;

          // Adds item to instock list
          inStockItems.push(nameinputField.value);
        nameDIV.appendChild(nameH3);

  // ~~STOCKBLOCK~~ //

        var stockItemName = document.createElement('div');
            stockItemName.classList.add('stockItemName-container')
              stockItemName.id='stockItemName';
              var itemName = document.createElement('h2');
                itemName.innerText = nameinputField.value;
            stockItemName.appendChild(itemName);

  // ~~STOCKBLOCK~~ //

        //RESETS INPUT FIELD
        nameinputField.value="";

  //amount DIV creation with h3 element placed inside of it
    var amountDIV = document.createElement('div');
      var amountH3 = document.createElement('h3');
        amountH3.innerText = "- $" + amountinputField.value;
      amountDIV.appendChild(amountH3);

// ~~STOCKBLOCK~~ //

    //SUB MAIN DIV
    var stockPriceAndSellDIV = document.createElement('div');
    stockPriceAndSellDIV.classList.add('stockPriceAndSell-container');
    //SUB MAIN DIV

      var stockPriceDIV = document.createElement('div');
        var stockPrice =document.createElement('h3');
          stockPrice.innerText = "$" + amountinputField.value;
        stockPriceDIV.appendChild(stockPrice);
      stockPriceAndSellDIV.appendChild(stockPriceDIV);

      var stockSellButtonDIV = document.createElement('div');
        var stockSellButton = document.createElement('BUTTON');
          stockSellButton.id='stockSellButton';
            stockSellButton.innerText="Sell?";
        stockSellButton.classList.add('stockSellButton');
        stockSellButtonDIV.appendChild(stockSellButton);
      stockPriceAndSellDIV.appendChild(stockSellButtonDIV);

// ~~STOCKBLOCK~~ //

      //MAKE THIS ADD OR MINUS DEPENDING ON WHAT YOU TRYING TO ACCOMPLISH
      currentSum -= Number(amountinputField.value);
      currentExpenses -= Number(amountinputField.value);

      //RESETS INPUT FIELD
      amountinputField.value="";

      totalexpensesAmount.innerText = currentExpenses;
      totalcurrentAmount.innerText = currentSum;


    //sum portion. h3 > div > block.
    var budgetSumDiv = document.createElement('div');
      var sumH3 = document.createElement('h3');
      sumH3.innerText = currentSum;
      budgetSumDiv.appendChild(sumH3);


  //finally puts all the seperate divs into the block.
    trackerBlock.appendChild(nameDIV);
    trackerBlock.appendChild(amountDIV);
    trackerBlock.appendChild(budgetSumDiv);

  //finally puts all the seperate TRACKER divs into the TRACKER block.
    stockBlock.appendChild(stockItemName);
    stockBlock.appendChild(stockPriceAndSellDIV);

    //Squeezes the blocks into their containers.
      stockContainer.appendChild(stockBlock);
      trackerContainer.appendChild(trackerBlock);

    ///// THIS IS THE STOCK ITEM SELL BOTTON SECTION
        stockSellButton.addEventListener('click', function(){
          nameinputField.value = stockSellButton.parentNode.parentNode.parentNode.firstChild.firstChild.innerText;
        })
  }
})
