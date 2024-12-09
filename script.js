document.addEventListener('DOMContentLoaded', function () {
    fetch("data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status ; ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {

            let chartContainer = document.querySelector(".chart")



            data.forEach(item => {
                const barContainer = document.createElement('div');
                barContainer.className = 'bar';

                // Create amount element
                const amount = document.createElement('div');
                amount.className = 'amount';

                const textAmount = document.createElement('p');
                textAmount.textContent = item.amount

                amount.appendChild(textAmount)

                // Create the bar 
                const bar = document.createElement('div');
                bar.style.setProperty('--height', `${item.amount+30}px`);
                bar.dataset.height = '';
                bar.style.height = bar.style.getPropertyValue('--height');
          
                 // Add hover functionality to show amount
                 bar.addEventListener('mouseover', () => {
                    amount.style.display = 'block';
                });
                bar.addEventListener('mouseout', () => {
                    amount.style.display = 'none';
                });

                // Create label
                const label = document.createElement('div');
                label.className = 'label';
                label.textContent = item.day;
                
                barContainer.appendChild(amount)
                barContainer.appendChild(bar);
                barContainer.appendChild(label);
          
                chartContainer.appendChild(barContainer);
              });
        })
        .catch((error) => {
            console.error("unable to fetch data:", error);
        })
});


function viewAmount(){

}
