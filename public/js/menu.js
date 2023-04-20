//this will handle all the clicks for the choices

const pizzaChoiceHandler = (event) => {
    
    const pizzaChoice = event.target.dataset.choice;
        switch (pizzaChoice) {
        case 'pepperoni':
        console.log('Pepperoni pizza selected');
        break;
      case 'vegetarian':
       console.log('Vegetarian pizza selected');
        break;
      case 'cheese':
        console.log('Cheese pizza selected');
        break;
      // we can just add more here
      default:
        break;
    }
  };


  document.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-choice') && event.target.dataset.type === 'pizza') {
      pizzaChoiceHandler(event);
    }
  });

  //event litner for the pizza choices based on datatype, 

