var score = 0 ; 
const conversationData = [
    {
        userName: "user",
        userText: "ถ้าดูจากแผนที่การเดินทางไปยังหมู่บ้าน Motionnian เราจะใช้วิธีการเดินทางอย่างไรดีนะพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "การเดินทางในเเต่ละครั้งจะต้องมีการระบุทิศทางที่เเน่ชัดนะ",
    },
    {
        userName: "user",
        userText: "อ้อ ! เวกเตอร์ ถ้าอย่างนั้นเราจะต้องใช้หลักการต่อเวกเตอร์ใช่ไหมพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ถูกต้องเเล้วล่ะ!",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }
        else{
            document.getElementById("userName").style.display = 'none';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } 
            else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // เชื่อมกับหน้าหลัก
        score = 50 ; 
        setTimeout(function(){
            window.location.href = "";
        },800);
    }
}

