var score = 0 ; 
const conversationData = [
    {
        userName: "ชาวบ้าน",
        userText: "กล่องปริศนาใบนี้เปิดยากจริง ๆ พวกเราต้องขอความช่วยเหลือจาก Theta และนักผจญภัยอีกครั้งเเล้วล่ะ",
    },
    {
        userName: "Theta",
        userText: "พวกเราพร้อมช่วยเหลือเสมอ!",
    },
    {
        userName: "user",
        userText: "อยากรู้จริง ๆ เลยว่าภายในกล่องปริศนาใบนี้จะมีอะไรซ่อนอยู่กันนะ",
    },
    {
        userName: "Theta",
        userText: "งั้นพวกเรามาช่วยกันไขรหัสลับเปิดกล่องปริศนากันเถอะ",
    },
    {
        userName: "user",
        userText: "เอ๊ะ ! แล้วเราจะไขรหัสลับเปิดกล่องปริศนาได้ด้วยวิธีไหนพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "เราจะใช้วิธีการไขรหัสลับเปิดกล่องปริศนาด้วยการนับเลขนัยสำคัญยังไงล่ะ",
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

