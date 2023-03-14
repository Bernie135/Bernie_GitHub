function JsExercise (exerciseConfig, sidebarElm, titleElm, containerElm) {
	this.exerciseConfig = exerciseConfig;
	this.sidebarElm = sidebarElm;
	this.titleElm = titleElm;
	this.containerElm = containerElm;
	this.currentExercise = null;
	
	this.initContainer();
	this.createSidebar();
};

/**
 * 建立左邊選單
 */
JsExercise.prototype.createSidebar = function () {
	for (var exerciseTitle in this.exerciseConfig) {
		var config = this.exerciseConfig[exerciseTitle];
		var item = config.item;
		if ($.trim(item) == '') {
			item = exerciseTitle;
		}
		var exerciseElm = $('<li class="markermenu"><a class="exercise" href="#" id="' + config.id + '">' + item + '</a></li>');
		exerciseElm.click(exerciseTitle, function(event){
			$(event.target).parent().parent().find('a').removeClass('active');
			$(event.target).addClass('active');
			
			this.showExerciseFields(event.data);
		}.bind(this));
		
		this.sidebarElm.append(exerciseElm);
	}
};

/**
 * 初始化右邊輸入介面
 */
JsExercise.prototype.initContainer = function () {
	this.containerElm.hide();
	this.containerElm.append($('<div class="right_column" style="display:none"></div>'));
};

/**
 * 建立輸入欄位UI
 */
JsExercise.prototype.showExerciseFields = function (exerciseTitle) {
	this.containerElm.show();
	
	var config = this.exerciseConfig[exerciseTitle];
	if (!config) {
		alert("Can not find config for the name:'" + exerciseTitle + "'");
		return;
	}
	
	this.currentExercise = exerciseTitle;

	var title = config.item
	if (config.title != '') {
		title += ' - ' + config.title	
	}
	this.titleElm.text(title);

	this.containerElm.html('');
	var field = $('<iframe src="' + 'Exercises/' + config.content + '"' 
		+ ' frameborder="0" border="0" cellspacing="0" style="border-style: none;width: 100%; min-height: calc(100vh - 180px)"></iframe>');
	this.containerElm.append(field);

	var cssLink = document.createElement("link");
	cssLink.href = "Style/style.css"; 
	cssLink.rel = "stylesheet"; 
	cssLink.type = "text/css"; 
	frames[0].document.head.appendChild(cssLink);
};
