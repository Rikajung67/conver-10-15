var score = 0 ; 
const conversationData = [
    {
        userName: "user",
        userText: "เย้ ๆ ! ในที่สุดพวกเราก็ไขรหัสลับสำเร็จแล้ว",
    },
    {
        userName: "ชาวบ้าน",
        userText: "ไหน ๆ พวกเราของดูหน่อยว่าภายในเจ้ากล่องปริศนาใบนี้มีอะไรซ่อนอยู่กันเเน่",
    },
    {
        userName: "ชาวบ้าน",
        userText: "เอ๋ ! นี้มันเเผนที่และบันทึกการเดินทางไปยังหมู่บ้าน Motionnian ของพ่อเฒ่านี้",
    },
    {
        userName: "user",
        userText: "หมู่บ้าน Newmathcian มีเรื่องให้น่าตื่นเต้นตลอดเลย",
    },
    {
        userName: "ชาวบ้าน",
        userText: "เเย่เเล้วแผนที่ถูกขโมยไป!",
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

