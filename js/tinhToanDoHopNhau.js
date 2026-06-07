function tinhToan(){
    let tenBan=document.getElementById("tenBan").value;
    let tenNguoiAy=document.getElementById("tenNguoiAy").value;
    let nsBan=document.getElementById("nsBan").value;
    let thangSinhBan=document.getElementById("thangSinhBan").value;
    let namSinhBan=document.getElementById("namSinhBan").value;
    let nsNguoiAy=document.getElementById("nsNguoiAy").value;
    let thangSinhNguoiAy=document.getElementById("thangSinhNguoiAy").value;
    let namSinhNguoiAy=document.getElementById("namSinhNguoiAy").value;
    let gtBan=document.querySelector('input[name="genderBan"]:checked')?.value;
    let gtNguoiAy=document.querySelector('input[name="genderNguoiAy"]:checked')?.value;
    if (!gtBan || !gtNguoiAy) {
        alert("Vui lòng chọn giới tính của cả hai bạn nhé!");
        return;
    }
    if (nsBan.length<2){
        nsBan="0"+nsBan;
    }
    if (thangSinhBan.length<2){
        thangSinhBan="0"+thangSinhBan;
    }
    if (nsNguoiAy.length<2){
        nsNguoiAy="0"+nsNguoiAy;
    }
    if (thangSinhNguoiAy.length<2){
        thangSinhNguoiAy="0"+thangSinhNguoiAy;
    }
    let chuoiNgaySinh=""
    let ntnBan=String(nsBan)+String(thangSinhBan)+String(namSinhBan);
    let ntnNguoiAy=String(nsNguoiAy)+String(thangSinhNguoiAy)+String(namSinhNguoiAy);
    if(gtBan!="nam"){
        let nsTam =ntnBan;
        ntnBan=ntnNguoiAy;
        ntnNguoiAy=nsTam;
    }
    for(let i=0;i<8;i++){
        chuoiNgaySinh+=ntnBan[i];
        chuoiNgaySinh+=ntnNguoiAy[i];
    }
    while(chuoiNgaySinh.length>2){
        if(chuoiNgaySinh=="100"){
            document.getElementById("kq").innerText=chuoiNgaySinh;
            return 0;
        }
        let chuoiTam=""
        for(let i=1;i<chuoiNgaySinh.length;i++){
            let socongDon=String(parseInt(chuoiNgaySinh[i])+parseInt(chuoiNgaySinh[i-1]));
            if (socongDon.length>1){
                socongDon=socongDon[1];
            }
            chuoiTam+=socongDon;
        }
        chuoiNgaySinh=chuoiTam;
    }
    const data = new URLSearchParams({
        n1 : tenBan,
        n2 : tenNguoiAy,
        score: chuoiNgaySinh
    });
    window.location.href="ketqua.html?"+data.toString();
    return 0;

}
function guiLoiToTinh(){
    const text=document.getElementById("loveText").value.trim();
    const n2 = urlData.get('n2')||"Người ấy";
    const maHoaText=btoa(unescape(encodeURIComponent(text)));
    const maHoaN2=btoa(unescape(encodeURIComponent(n2)));
    const linkKetQua=`noiDungToTinh.html?msg=${maHoaText}&n2=${maHoaN2}`;
}

