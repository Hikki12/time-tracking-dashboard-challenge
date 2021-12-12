
const dailyBtn = document.getElementById('dailyBtn');
const weeklyBtn = document.getElementById('weeklyBtn');
const monthlyBtn = document.getElementById('monthlyBtn');

const updateButtonState = (id) => {
    if (id === 'daily'){
        dailyBtn.className = 'user-button is-active'
        weeklyBtn.className = 'user-button is-inactive';
        monthlyBtn.className = 'user-button is-inactive';
    } 
    else if(id === 'weekly'){
        dailyBtn.className = 'user-button is-inactive'
        weeklyBtn.className = 'user-button is-active';
        monthlyBtn.className = 'user-button is-inactive';        
    }
    else if(id === 'monthly'){
        dailyBtn.className = 'user-button is-inactive'
        weeklyBtn.className = 'user-button is-inactive';
        monthlyBtn.className = 'user-button is-active';        
    }
}


dailyBtn.addEventListener('click', () => updateButtonState('daily'));
weeklyBtn.addEventListener('click', () => updateButtonState('weekly'));
monthlyBtn.addEventListener('click', () => updateButtonState('monthly'));