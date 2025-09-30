        
        
const form = document.getElementById ('myform')
        const input = document.getElementById ('inputtext')
        const list = document.getElementById ('itemlist')

        form.addEventListener("submit",function(event) {
            event.preventDefault();
            const inputValue = input.value.trim();

            if(inputValue !== ""){
                console.log(inputValue);
                const li = document.createElement('li')
                li.textContent = inputValue
                list.appendChild(li)
                input.value = ''
            } else {alert('Please Enter the value !')}
        }
    )