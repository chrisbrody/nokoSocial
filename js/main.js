// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGE
const messagesNotification = document.querySelector('#messages-notification');
const messageNotificationCount = messagesNotification.querySelector('.notification-count');

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// ==================== SIDEBAR ====================

// remove active class from all menu items 
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

// ==================== MESSAGES ====================
// search chat messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight message card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotificationCount.style.display = 'none';
    setTimeout(() => { 
        messages.style.boxShadow = 'none';
        messageNotificationCount.style.display = 'block';
    }, 2000)
});

// ==================== THEME DISPLAY ====================
// open modal
const openThemeModal = () => {
    console.log('clicked');
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);

// close modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);