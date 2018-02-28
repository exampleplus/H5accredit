$(function(){
	
	$("#subBtn").click(function(){
		var uid=sessionStorage.getItem("id");
		var token=sessionStorage.getItem("tok");
		var name=$("#name").val();
		var idCard=$("#idCard").val();
		var city=$("#city").val();
		var district=$("#district").val();
		var closelyName=$("#closelyName").val();
		var closelyNumber=$("#closelyNumber").val();
		var contactName=$("#contactName").val();
		var contactNumber=$("#contactNumber").val();
		var phonePattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^(([0\+]\d{2,3})?(0\d{2,3}))(\d{7,8})((\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if(name==""){
			alert("姓名不能为空");
			return;
		}else if(city==""){
			alert("请输入市/县地址");
			return;
		}else if(district==""){
			alert("请输入详细地址");
			return;
		}else if(closelyName==""){
			alert("请输入直系亲属姓名");
			return;
		}else if(closelyNumber==""){
			alert("请输入直系亲属联系方式");
			return;
		}else if(phonePattern.test(closelyNumber) === false){
			alert("请输入正确的直系亲属电话号码格式");
			return;
		}else if(contactName==""){
			alert("请输入其他联系人姓名");
			return;
		}else if(contactNumber==""){
			alert("请输入其他联系人联系方式");
			return;
		}else if(phonePattern.test(contactNumber) === false){
			alert("请输入正确的其他联系人电话号码格式");
			return;
		}
		$("#closelyName").prop("disabled",false);
		$("#closelyRelation").prop("disabled",false);
		$("#closelyNumber").prop("disabled",false);
		
		$("#contactName").prop("disabled",false);
		$("#contactRelation").prop("disabled",false);
		$("#contactNumber").prop("disabled",false);
		$.ajax({
			type:"post",
			url:host+"wechat/PerosnIdentify?uid="+uid+"&token="+token,
			async:false,
			datatype:"json",
			data: $("#form1").serialize(),
			success:function(res){
				console.log(res);
				if(res.code==0){
					alert(res.message);
					window.location.href="lending.html";
				}else{
					alert(res.message)
				}
			},
			error:function(data){
				alert("提交失败");
			}
		});
	})
	
})
