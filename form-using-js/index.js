// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Create form element
    const form = document.createElement('form');
    form.id = 'userForm';
    form.style.maxWidth = '400px';
    form.style.margin = '0 auto';
    form.style.padding = '20px';
    form.style.border = '1px solid #ccc';
    form.style.borderRadius = '5px';
    form.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    form.style.fontFamily = 'Arial, sans-serif';

    // Create heading
    const heading = document.createElement('h2');
    heading.innerText = 'User Information Form';
    heading.style.textAlign = 'center';
    form.appendChild(heading);

    // Create input fields
    const fields = [
        { label: 'Username', type: 'text', id: 'username', required: true },
        { label: 'Email', type: 'email', id: 'email', required: true },
        { label: 'Age', type: 'number', id: 'age', required: true }
    ];

    fields.forEach(field => {
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = '15px';

        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.innerText = field.label;
        label.style.display = 'block';
        label.style.marginBottom = '5px';
        label.style.fontWeight = 'bold';

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.required = field.required;
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.boxSizing = 'border-box';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '4px';

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        form.appendChild(wrapper);
    });

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Submit';
    submitButton.style.width = '100%';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#28a745';
    submitButton.style.color = '#fff';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    submitButton.style.fontSize = '16px';
    submitButton.style.cursor = 'pointer';

    // Add hover effect to button
    submitButton.addEventListener('mouseover', () => {
        submitButton.style.backgroundColor = '#218838';
    });
    submitButton.addEventListener('mouseout', () => {
        submitButton.style.backgroundColor = '#28a745';
    });

    form.appendChild(submitButton);

    // Create response message paragraph
    const responseMessage = document.createElement('p');
    responseMessage.id = 'responseMessage';
    responseMessage.style.textAlign = 'center';
    responseMessage.style.marginTop = '20px';
    responseMessage.style.fontWeight = 'bold';

    // Append form and response message to body
    document.body.appendChild(form);
    document.body.appendChild(responseMessage);

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Capture form data
        const formData = {
            username: document.getElementById('username').value.trim(),
            email: document.getElementById('email').value.trim(),
            age: parseInt(document.getElementById('age').value.trim())
        };

        // Validate data (additional validation can be added as needed)
        if (!formData.username || !formData.email || isNaN(formData.age)) {
            responseMessage.style.color = 'red';
            responseMessage.innerText = 'Please fill out all fields correctly.';
            return;
        }

        // Send data to server
        fetch('https://example.com/api/saveUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.style.color = 'green';
            responseMessage.innerText = data.message || 'User data saved successfully!';
            form.reset(); // Reset form fields
        })
        .catch(error => {
            console.error('Error:', error);
            responseMessage.style.color = 'red';
            responseMessage.innerText = 'An error occurred while saving data.';
        });
    });
});
