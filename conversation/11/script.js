var score = 0 ; 
const conversationData = [
    {
        userName: "Theta",
        userText: "ก่อนที่นักผจญภัยจะช่วยชาวบ้านไขรหัสลับเปิดกล่องปริศนาพี่ Theta ขอทบทวนวิธีการนับเลขนัยสำคัญแบบต่าง ๆ",
    },
    {
        userName: "Theta",
        userText: "โดยเราจะนับเลขโดด 1-9 เป็นเลขนัยสำคัญทุกตัว",
    },
    {
        userName: "Theta",
        userText: "หากเป็นเลข 0 เราจะนับเลขนัยสำคัญเมื่อ 0 อยู่ระหว่างหรือหลังเลขโดดเท่านั้น แต่หากเลข 0 อยู่หลังจำนวนเต็มเราอาจนับหรือไม่นับเป็นเลขนัยสำคัญก็ได้",
    },
    {
        userName: "Theta",
        userText: "ในกรณีที่ตัวเลขอยู่ในรูปสัญกรณ์วิทยาศาสตร์ เราจะนับเลขนัยสำคัญเฉพาะตัวเลขที่อยู่ด้านหน้าตัวพหุคูณ",
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

