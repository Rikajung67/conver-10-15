var score = 0 ; 
const conversationData = [
    {
        userName: "ชาวบ้าน",
        userText: "ขอบใจ Theta และ นักผจญภัย อีกครั้งที่นำแผนที่และบันทึกการเดินทางของพ่อเฒ่ากลับมายังหมู่บ้านเราอีกครั้ง",
    },
    {
        userName: "ชาวบ้าน",
        userText: "งั้นพวกเราขอตอบเเทนน้ำใจด้วยเเผนที่การเดินทางไปยังหมู่บ้าน Motionnian ใบนี้",
    },
    {
        userName: "user",
        userText: "ขอบคุณคุณลุงและชาวบ้านมาก ๆ พวกเราจะรักษาเเผนที่ไว้เป็นอย่างดีแน่นอน",
    },
    {
        userName: "Theta",
        userText: "พร้อมออกเดินทางไปยังหมู่บ้าน Motionnian กันหรือยัง!",
    },
    {
        userName: "user",
        userText: "พร้อมสุด ๆ เลยพี่ Theta จะมีเรื่องที่น่าตื่นเต้นอะไรรอพวกเราอยู่กันนะ",
    },
    {
        userName: "ชาวบ้าน",
        userText: "โชคดีกับการเดินทางนะ Theta และนักผจญภัย เเล้วพบกับใหม่",
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

