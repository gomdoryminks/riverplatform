$(function () {

    /*등록정보입력*/
    $(".findpwPop").dialog({
        autoOpen: false
    });
    $(".findpw").on("click", function () {
        $(".findpwPop").dialog("open");
    });
    $(".btn_cancel1").on("click", function () {
        $(".findpwPop").dialog("close");
    });


    /*비밀번호 찾기*/
    $(".changepwPop").dialog({
        autoOpen: false
    });
    $(".btn_chgpw").on("click", function () {
        $(".changepwPop").dialog("open");
    });
    $(".btn_cancel2").on("click", function () {
        $(".changepwPop").dialog("close");
    });


    /*비밀번호 변경*/
    $(".changepwPop2").dialog({
        autoOpen: false
    });
    $(".btn_chgpw2").on("click", function () {
        $(".changepwPop2").dialog("open");
    });
    $(".btn_cancel3").on("click", function () {
        $(".changepwPop2").dialog("close");
    });


    /*안심번호 코드 생성*/
    $(".insertNumPop").dialog({
        autoOpen: false
    });
    $(".insertNum").on("click", function () {
        $(".insertNumPop").dialog("open");
    });
    $(".btn_cancel4").on("click", function () {
        $(".insertNumPop").dialog("close");
    });


    /*렌트카 안심번호 코드 생성*/
    $(".insertRentPop").dialog({
        autoOpen: false,
        minWidth: 350
    });
    $(".insertRent").on("click", function () {
        $(".insertRentPop").dialog("open");
    });
    $(".btn_cancel5").on("click", function () {
        $(".insertRentPop").dialog("close");
    });


    /*안심번호 코드 생성*/
    $(".insertComPop").dialog({
        autoOpen: false,
        minWidth: 350
    });
    $(".insertCom").on("click", function () {
        $(".insertComPop").dialog("open");
    });
    $(".btn_cancel6").on("click", function () {
        $(".insertComPop").dialog("close");
    });
    $(document).on("click", ".tab .tab_tit ul li a", function () {
        var loca = $(this).attr("href");
        $(".tab .tab_tit ul li a").removeClass("on");
        $(this).addClass("on");
        $(".tab_cont > div").removeClass("on");
        $(loca).addClass("on");
        return false;
    });
    
    
    /*회원가입*/
    $(".joinPop").dialog({
        autoOpen: false,
        minWidth: 400
    });
    $(".joinBtn").on("click", function () {
        $(".joinPop").dialog("open");
    });
    $(".cancelBtn").on("click", function () {
        $(".joinPop").dialog("close");
    });
    
    
    /*재난 상황 알림*/
    $(".alarmPop").dialog({
        autoOpen: true,
        minWidth: 400
    });
    $(".cancelBtn").on("click", function () {
        $(".alarmPop").dialog("close");
    });
    
    
    /*권한관리 등록*/
    $(".authRegisterPop").dialog({
        autoOpen: false,
        minWidth: 400
    });
    $(".authRegisterBtn").on("click", function () {
        $(".authRegisterPop").dialog("open");
    });
    $(".cancelBtn").on("click", function () {
        $(".authRegisterPop").dialog("close");
    });
    
    
    /*권한관리 수정*/
    $(".authModifyPop").dialog({
        autoOpen: false,
        minWidth: 400
    });
    $(".authModifyBtn").on("click", function () {
        $(".authModifyPop").dialog("open");
    });
    $(".cancelBtn").on("click", function () {
        $(".authModifyPop").dialog("close");
    });

    $(".date").datepicker();
    $(document).on("click", ".add_auth", function () {
        $(".auth_popup").dialog({
            modal: true,
            buttons: {
                "저장": function () {},
                "취소": function () {
                    $(this).dialog("close");
                }
            }
        });
    });
    $(document).on("click", ".tracking .left .left_ul li a", function () {
        var loca = $(this).attr("href");
        $(".tracking .left .left_ul li a").removeClass("on");
        $(this).addClass("on");
        $(".tracking .panel").removeClass("on");
        $(loca).addClass("on");
        $(".tracking .panel").css({"top": "0px", "left": "87px"});
        
        /* 20211102수정 */
        if ($(".tracking #panel02 .panel_cont .check_tree li .node_btn").length > 0) {
            $(".tracking .layer_panel").removeClass("on");
            $(".tracking .layer_panel").css({"top": "110px", "left": "458px"});
        }
        /* 20211102수정 */
        
        if ($(".tracking #panel05 .panel_cont ul li a").length > 0) {
            $(".tracking #panel05 .panel_cont ul li a").removeClass("on");
            $(".tracking .sub_panel").removeClass("on");
            $(".tracking .sub_panel").css({"top": "415px", "left": "458px"});
        }
        
        return false;
    });
    $(document).on("click", ".tracking #panel05 .panel_cont ul li a", function () {
        var loca = $(this).attr("href");
        $(".tracking #panel05 .panel_cont ul li a").removeClass("on");
        $(this).addClass("on");
        $(".tracking .sub_panel").removeClass("on");
        $(loca).addClass("on");
        $(".tracking .sub_panel").css({"top": "415px", "left": "458px"});
        return false;
    });
    
    
    $(document).on("click", ".tracking .zoom .zoom_value button", function (e) {
        $(".tracking .zoom .zoom_value button").removeClass("on");
        $(this).addClass("on");
        return false;
    });
    
    
    $(".btn_close_panel").click(function(){
        $(".tracking .left .left_ul li a").removeClass("on");
        $(".tracking .panel").removeClass("on");
        $(".tracking .panel").css({"top": "0px", "left": "87px"});
        
        /* 20211102수정 */
        if ($(".tracking #panel02 .panel_cont .check_tree li .node_btn").length > 0) {
            $(".tracking .layer_panel").removeClass("on");
            $(".tracking .layer_panel").css({"top": "110px", "left": "458px"});
        }
        /* 20211102수정 */
        
        if ($(".tracking #panel05 .panel_cont ul li a").length > 0) {
            $(".tracking #panel05 .panel_cont ul li a").removeClass("on");
            $(".tracking .sub_panel").removeClass("on");
            $(".tracking .sub_panel").css({"top": "415px", "left": "458px"});
        }
        
        return false;
    });
    $(".btn_close_sub_panel").click(function(){
        $(".tracking #panel05 .panel_cont ul li a").removeClass("on");
        $(".tracking .sub_panel").removeClass("on");
        $(".tracking .sub_panel").css({"top": "415px", "left": "458px"});
        return false;
    });
    /* 20211102수정 */
    $(".btn_close_layer_panel").click(function(){
        $(".tracking .layer_panel").removeClass("on");
        $(".tracking .layer_panel").css({"top": "110px", "left": "458px"});
        return false;
    });
    /* 20211102수정 */
    /*$(document).on("click", ".tracking #panel01 .panel_tab li a", function () {
        var loca = $(this).attr("href");
        $(".tracking #panel01 .panel_tab li a").removeClass("on");
        $(this).addClass("on");
        $("#panel01 .panel_wrap .panel_cont .panel_div").removeClass("on");
        $(loca).addClass("on");
        return false;
    });*/
    $(document).on("click", ".tracking #panel04 .panel_tab li a", function () {
        var loca = $(this).attr("href");
        $(".tracking #panel04 .panel_tab li a").removeClass("on");
        $(this).addClass("on");
        $("#panel04 .panel_wrap .panel_cont .panel_div").removeClass("on");
        $(loca).addClass("on");
        return false;
    });
    $(document).on("click", ".tracking #panel06 .panel_tab li a", function () {
        var loca = $(this).attr("href");
        $(".tracking #panel06 .panel_tab li a").removeClass("on");
        $(this).addClass("on");
        $("#panel06 .panel_wrap .panel_cont .panel_div").removeClass("on");
        $(loca).addClass("on");
        return false;
    });
    /* 20211102수정 */
    $(document).on("click", ".tracking .layer_panel_point .panel_tab li a", function () {
        var loca = $(this).attr("href");
        $(".tracking .layer_panel_point .panel_tab li a").removeClass("on");
        $(this).addClass("on");
        $(".layer_panel_point .panel_wrap .panel_cont .panel_div").removeClass("on");
        $(loca).addClass("on");
        return false;
    });
    /* 20211102수정 */
    $(document).on("click", ".tracking #panel06 .panel_cont .panel_div .panel_move", function () {
        var loca = $(this).attr("href");
        $("#panel06 .panel_wrap .panel_cont .panel_div").removeClass("on");
        $(loca).addClass("on");
        return false;
    });
    $(document).on("click",".btn_layer_setting", function(){
        $(".layer_setting").dialog({
            autoOpen: false,
            minWidth: 350,
            buttons: {
                "저장": function () {},
                "취소": function () {
                    $(this).dialog("close");
                }
            }
        });
    });
    
    
    if ($(".alarmPop textarea").length > 0) {
        $(".alarmPop textarea").val($(".alarmPop textarea").val().replace(/(<br>|<br\/>|<br \/>)/g, "\r\n"));
    }
    
    
    //트리구조에서 로딩시 하위 메뉴 숨기기
    $(".check_tree li .view_icon").each(function() {
        if (!$(this).hasClass("on")) {
            if ($(this).siblings("ul").length > 0) {
                $(this).siblings("ul").css("display","none");
            }
        }
    });
    
    //트리구조에서 아이콘 클릭시 하위 메뉴 보이기/숨기기
    $(".check_tree li .view_icon").click(function() {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            
            if ($(this).siblings("ul").length > 0) {
                $(this).siblings("ul").stop(true,true).slideUp(200);
            }
        } else {
            $(this).addClass("on");
            
            if ($(this).siblings("ul").length > 0) {
                $(this).siblings("ul").stop(true,true).slideDown(200);
            }
        }
    });
    
    //트리구조에서 체크박스 변경시 하위 메뉴 보이기/숨기기
    $(".check_tree li input[type='checkbox']").change(function() {
        if ($(this).is(":checked")) {
            $(this).siblings(".view_icon").addClass("on");

            if ($(this).siblings("ul").length > 0) {
                $(this).siblings("ul").stop(true,true).slideDown(200);
            }
        } else {
            $(this).siblings(".view_icon").removeClass("on");
            
            if ($(this).siblings("ul").length > 0) {
                $(this).siblings("ul").stop(true,true).slideUp(200);
            }
        }
    });
    
    /* 20211102수정 */
    if ($(".layer_colorpicker").length > 0) {
        $(".layer_colorpicker").spectrum({
            type: "component",
            preferredFormat: "hex",
            showPalette: false,
            showAlpha: false
        });
    }
    /* 20211102수정 */
    
    //레이어 투명도 값 설정
    $(".layer_opacity_area input[type='range']").each(function() {
    	opacityChange(this);
    });
    
    //화면 축소/확대 바 설정
    if ($("#zvrinput").length > 0) {
    	zvrChange($("#zvrinput").val(), $("#zvrinput").attr("max"));
        
        document.getElementById("zvrinput").oninput = function() {
            zvrChange(this.value, this.max);
        };
    }
    
    $(".btn_zoom_in").click(function() {
        if ($("#zvrinput").length > 0) {
			var zvriVal = parseInt($("#zvrinput").val());
			var zvriMax = parseInt($("#zvrinput").attr("max"));
			var zvriNewVal = (zvriVal < zvriMax) ? zvriVal + 1 : zvriMax;
			
			$("#zvrinput").val(zvriNewVal);
			zvrChange(zvriNewVal, zvriMax);
		}
    });
    
    $(".btn_zoom_out").click(function() {
        if ($("#zvrinput").length > 0) {
			var zvriVal = parseInt($("#zvrinput").val());
			var zvriMin = parseInt($("#zvrinput").attr("min"));
			var zvriMax = parseInt($("#zvrinput").attr("max"));
			var zvriNewVal = (zvriVal > zvriMin) ? zvriVal - 1 : zvriMin;
			
			$("#zvrinput").val(zvriNewVal);
			zvrChange(zvriNewVal, zvriMax);
		}
    });
});

/* 20211102수정 */
function openNodeSetting(type) {
    $(".tracking .layer_panel").removeClass("on");
    $(".tracking .layer_panel_" + type).addClass("on");
    $(".tracking .layer_panel").css({"top": "110px", "left": "458px"});
    return false;
}
/* 20211102수정 */

//레이어 투명도 값 설정
function opacityChange(obj) {
	$(obj).next("input[type='text']").val($(obj).val());
}

//화면 축소/확대 바
function zvrChange(val, max) {
    var per = (((val - 1) / (max - 1)) * 100);
    
    $(".zvrinput-style").remove();
    $("<style type='text/css' class='zvrinput-style'>.tracking .zoom .zoom_value .zoom_value_range input[type='range']::-webkit-slider-runnable-track { background: linear-gradient(to right, #14cabd 0%, #14cabd " + per + "%, #d7d7d7 " + per + "%, #d7d7d7 100%); }</style>").appendTo("head");
};
