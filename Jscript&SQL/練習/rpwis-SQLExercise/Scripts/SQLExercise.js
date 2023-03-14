function SQLExercise (quesConfig, sidebarElm, titleElm, containerElm) {
	this.quesConfig = quesConfig;
	this.sidebarElm = sidebarElm;
	this.titleElm = titleElm;
	this.containerElm = containerElm;
	this.currentQues = null;
	
	this.initContainer();
	this.createSidebar();
};
/**
 * 建立左邊選單
 */
SQLExercise.prototype.createSidebar = function () {
	for (var quesTitle in this.quesConfig) {
		var config = this.quesConfig[quesTitle];
		var title = config.title;
		if ($.trim(title) == '') {
			title = quesTitle;
		}
		var quesElm = $('<li class="markermenu"><a class="ques" href="#" id="' + config.id + '">' + title + '</a></li>');
		quesElm.click(quesTitle, function(event){
			$(event.target).parent().parent().find('li').removeClass('active');
			$(event.target).parent().addClass('active');
			
			this.showQuestionFields(event.data);
		}.bind(this));
		
		this.sidebarElm.append(quesElm);
	}
};

/**
 * 初始化右邊輸入介面
 */
SQLExercise.prototype.initContainer = function () {
	this.containerElm.hide();
	
	var quesElm = $('<div class="right_column" style="display:none"></div>'); 
	this.containerElm.append(quesElm);
};

/**
 * 建立輸入欄位UI
 */
SQLExercise.prototype.showQuestionFields = function (quesTitle) {
	this.containerElm.show();
	
	var config = this.quesConfig[quesTitle];
	if (!config) {
		alert("Can not find config for the name:'" + quesTitle + "'");
		return;
	}
	
	this.currentQues = quesTitle;
	this.titleElm.text(config.title);
	
	var imageStr = '';
	if (config.image.length > 1) {
		for (var i = 0; i < config.image.length; i++) {
			if (imageStr != '') {
				imageStr += '<br/>';
			}
			imageStr += '<img src="Images/' + config.image[i] + '" width="545px" />';
		}
	} else if (config.image.length == 1) {
		imageStr = '<img src="Images/' + config.image[0] + '" width="545px" />';
	}
	
	var resultStr = '';
	if (config.answerImage != '') {
		resultStr += '<br/><a href="#" onclick="$(\'.result\').show();">點按看結果</a>' +
			'<div class="result" style="display:none">' +
			'<img src="Images/' + config.answerImage + '" width="545px" />' +
			'</div>';
	}
	
	var answerStr = '';
	if (config.answer != '') {
		answerStr += '<br/><a href="#" onclick="$(\'.answer\').show();">點按看答案</a>' +
			'<div class="answer" style="display:none">' +
			'<p>Answer: <br/> ' + config.answer + '</p>' +
			'</div>';
	}
	
	this.containerElm.html('');
	var field = $(
		'<p>' + config.question + '</p>' +
		imageStr + 
		(config.hint == '' ? '' : ('<p>HINT: ' + config.hint + '</p>')) +
		'<div class="hr"></div>'
		+ resultStr
		//+ answerStr
	);
	this.containerElm.append(field);
};
