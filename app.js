let grade = (avg_mark) => {
    if (avg_mark < 0 || avg_mark > 10) {
        alert('Nhập số điểm từ 0 đến 10 điểm');
        return false;
    }
    if (avg_mark < 5) return 'Yếu';
    else if (avg_mark < 7) return 'Trung Bình';
    else if (avg_mark < 8) return 'Khá';
    else return ' Giỏi';
    return false;
}

const student = document.forms.frmstudent;
student.addEventListener('submit', (e) => {
    let student = document.querySelector('#student').value;
    let avg_mark = document.querySelector('#avg_mark').value;
    let bangdiem = document.querySelector('#bangdiem');
    if (student.length < 2) {
        alert('Bạn cần nhập tên cần có 2 ký tự trở lên');
        return false;
    }
    bangdiem.style.display = 'block';
    bangdiem.innerHTML = `
        Tên: <strong>${student}</strong><br>
        Điểm trung bình: ${avg_mark}<br>
        Xếp loại: ${grade(avg_mark)}
        `;

    avg_mark = parseFloat(avg_mark);
    console.log(avg_mark)
    console.log(grade(avg_mark));



    e.preventDefault();

})