var score = 0 ; 
const conversationData = [
    {
        userName: "เล่าเรื่อง",
        userText: "monster คือแครอทพันปีที่อยู่ในสวนเเครอทซึ่งคอยเฝ้ากล่องปริศนาแต่ไม่สามารถเปิดกล่องปริศนาได้",
    },
    {
        userName: "เล่าเรื่อง",
        userText: "เมื่อ Theta และ นักผจญภัย เปิดกล่องปริศนาเเล้วพบกับเเผนที่และบันทึกการเดินทางของพ่อเฒ่า monster ที่แอบฟังอยู่จึงได้ช่วงชิงเเผนที่และบันทึกการเดินทางไป",
    },
    {
        userName: "เล่าเรื่อง",
        userText: "Theta และ นักผจญภัย จะต้องต่อสู่กับ Monster เพื่อนำแผนที่และบันทึกการเดินทางของพ่อเฒ่ากลับมาคืนชาวบ้านให้ได้",
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

