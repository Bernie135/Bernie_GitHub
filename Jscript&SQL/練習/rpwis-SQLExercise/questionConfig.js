var quesConfig = {
	Q0: {
		id: 'Q0',
		title: '使用須知',
		question :"<ul> "
				+ "		<p> "
				+ "			<li>請使用SQL Fiddle 協助練習，<a href='http://sqlfiddle.com' target='_blank'>http://sqlfiddle.com</a></li> "
				+ "			<ul> "
				+ "				<li>請選擇使用Oracle 11g R2</li> "
				+ "				<li>於SQL Fiddle左側文字框中貼入<a href='Schema.sql' target='_blank'>Schema.sql</a>的DDL語法以建立資料表格式，並按下下方Build Schema</li> "
				+ "				<li>於SQL Fiddle右側文字框中貼入<a href='Schema.sql' target='_blank'>Schema.sql</a>的DML語法以建立資料，請依commit指令分次執行(因SQL Fiddle有單次傳輸大小上限)"
				+ "				<li>練習SQL語法，題目如本網頁左側選單，10題</li> "
				+ "			</ul> "
				+ "		</p> "
				+ "	</ul>",
		image: ['0-1.png', '0-2.png'],
		hint: '',
		answer: '',
		answerImage: ''
	},
	Q1: {
		id: 'Q1',
		title: 'Question 1',
		question: '請查出本公司所有部門',
		image: ['Departments.png'],
		hint: 'SELECT',
		answer: "SELECT * FROM DEPARTMENTS;",
		answerImage: 'Answer01.png'
	},
	Q2: {
		id: 'Q2',
		title: 'Question 2',
		question: '請查出本公司所有有填寫地址資訊的男性員工姓名',
		image: ['Employees.png'],
		hint: 'WHERE、AND、NULL',
		answer: "SELECT NAME FROM EMPLOYEES WHERE GENDER = 'M' AND ADDRESS IS NOT NULL;",
		answerImage: 'Answer02.png'
	},
	Q3: {
		id: 'Q3',
		title: 'Question 3',
		question: '請查出本公司姓「林」或是名字中有「文」的員工',
		image: ['Employees.png'],
		hint: 'OR、LIKE',
		answer: "SELECT NAME FROM EMPLOYEES WHERE NAME LIKE '林%' OR NAME LIKE '%文%';",
		answerImage: 'Answer03.png'
	},
	Q4: {
		id: 'Q4',
		title: 'Question 4',
		question: '請列出訓練類型為A與C的資料，並依照訓練類型由小到大排序',
		image: ['Training.png'],
		hint: 'IN、ORDER BY',
		answer: "SELECT * FROM TRAINING WHERE TYPE IN ('A', 'C') ORDER BY TYPE;",
		answerImage: 'Answer04.png'
	},
	Q5: {
		id: 'Q5',
		title: 'Question 5',
		question: '請查出本公司目前沒有員工的部門',
		image: ['Departments.png','Employees.png'],
		hint: 'EXISTS',
		answer: "SELECT NAME FROM DEPARTMENTS WHERE NOT EXISTS (SELECT ID FROM EMPLOYEES WHERE DEPARTMENTID = DEPARTMENTS.ID);",
		answerImage: 'Answer05.png'
	},
	Q6: {
		id: 'Q6',
		title: 'Question 6',
		question: '請所有列出訓練類型',
		image: ['Training.png'],
		hint: 'DISTINCT',
		answer: "SELECT DISTINCT TYPE FROM TRAINING;",
		answerImage: 'Answer06.png'
	},
	Q7: {
		id: 'Q7',
		title: 'Question 7',
		question: '請列出各部門的人數',
		image: ['Employees.png'],
		hint: 'GROUP BY、COUNT',
		answer: "SELECT DEPARTMENTID, COUNT(ID) AS CNT FROM EMPLOYEES GROUP BY DEPARTMENTID;",
		answerImage: 'Answer07.png'
	},
	Q8: {
		id: 'Q8',
		title: 'Question 8',
		question: '請列出至少有十個人以上的部門ID',
		image: ['Employees.png'],
		hint: 'HAVING',
		answer: "SELECT DEPARTMENTID FROM EMPLOYEES GROUP BY DEPARTMENTID HAVING COUNT(1) >= 10;",
		answerImage: 'Answer08.png'
	},
	Q9: {
		id: 'Q9',
		title: 'Question 9',
		question: '請提供訓練成績表，員工編號、總得分、訓練個數、總得分/訓練個數(四捨五入制小數第二位)、平均得分(內建函數AVG)，並依平均分數高至低排列',
		image: ['Training.png'],
		hint: 'SUM、COUNT、ROUND、AVG、GROUP BY、ORDER BY',
		answer: "SELECT EMPLOYEEID, SUM(GRADE) AS GRADE, COUNT(TYPE) AS CNT, ROUND(SUM(GRADE) / COUNT(TYPE), 2) AS CAL, AVG(GRADE) AS AVGGRADE FROM TRAINING GROUP BY EMPLOYEEID ORDER BY AVGGRADE;",
		answerImage: 'Answer09.png'
	},
	Q10: {
		id: 'Q10',
		title: 'Question 10',
		question: '請列出所有主管(主管ID為空)與其部門名稱',
		image: ['Employees.png', 'Departments.png'],
		hint: 'INNER JOIN',
		answer: "SELECT EMP.NAME, DEPT.NAME FROM EMPLOYEES EMP JOIN DEPARTMENTS DEPT ON EMP.DEPARTMENTID = DEPT.ID WHERE EMP.MANAGERID IS NULL;",
		answerImage: 'Answer10.png'
	},
	Q11: {
		id: 'Q11',
		title: 'Question 11',
		question: '請列出所有部門的部門名稱與其對應主管(主管ID為空)名字',
		image: ['Employees.png', 'Departments.png'],
		hint: 'LEFT JOIN',
		answer: "SELECT DEPT.NAME, EMP.NAME FROM DEPARTMENTS DEPT LEFT JOIN EMPLOYEES EMP ON EMP.DEPARTMENTID = DEPT.ID AND EMP.MANAGERID IS NULL;",
		answerImage: 'Answer11.png'
	},
	Q12: {
		id: 'Q12',
		title: 'Question 12',
		question: '請產出一份報表呈現人員資料，欄位有：部門代碼、部門名稱、員工編號、員工姓名、主管姓名，並先依照部門代號由小到大排序，再依照主管編號由大到小排序',
		image: ['Employees.png', 'Departments.png'],
		hint: 'INNER JOIN、SELF JOIN、LEFT JOIN、ORDER BY',
		answer: "SELECT DEP.CODE, DEP.NAME, EMP.ID, EMP.NAME, MAN.NAME FROM EMPLOYEES EMP LEFT JOIN EMPLOYEES MAN ON EMP.MANAGERID = MAN.ID JOIN DEPARTMENTS DEP ON EMP.DEPARTMENTID = DEP.ID ORDER BY DEP.CODE ASC, EMP.MANAGERID DESC;",
		answerImage: 'Answer12.png'
	},
	Q13: {
		id: 'Q13',
		title: 'Question 13',
		question: '請產出一份特殊報表，查出姓王的員工且有訓練過的員工或是居住在台北市且未接受過訓練的員工，若該名員工地址未填，則顯示「無資料」',
		image: ['Employees.png'],
		hint: 'OR、LIKE、CASE WHEN THEN、EXISTS、NOT EXISTS',
		answer: "SELECT NAME, CASE WHEN ADDRESS IS NULL THEN '無資料' ELSE ADDRESS END AS ADDRESS FROM EMPLOYEES WHERE (NAME LIKE '王%' AND EXISTS (SELECT 1 FROM TRAINING WHERE EMPLOYEEID = EMPLOYEES.ID)) OR (ADDRESS LIKE '台北市%' AND NOT EXISTS (SELECT 1 FROM TRAINING WHERE EMPLOYEEID = EMPLOYEES.ID));",
		answerImage: 'Answer13.png'
	},
	Q14: {
		id: 'Q14',
		title: 'Question 14',
		question: '請查詢出所屬部門人數為8人以上的員工，其主管不為劉天王且其出生日期於1990年之後，顯示內容包括員工姓名、性別(性別以「男」「女」「X」顯示)與出生日期(格式為YYYY/MM/DD，ex:1990/04/11)',
		image: ['Employees.png'],
		hint: 'GROUP BY、HAVING、COUNT、IN、子查詢、NOT EQUEAL(<>)、TO_CHAR',
		answer: "SELECT NAME, CASE WHEN GENDER = 'M' THEN '男' WHEN GENDER = 'F' THEN '女' ELSE 'X' END AS GENDER, TO_CHAR(BIRTHDATE, 'YYYY/MM/DD') AS BIRTHDATE FROM EMPLOYEES WHERE DEPARTMENTID IN (SELECT DEPARTMENTID FROM EMPLOYEES GROUP BY DEPARTMENTID HAVING COUNT(*) >= 8) AND MANAGERID <> (SELECT ID FROM EMPLOYEES WHERE NAME = '劉天王') AND TO_CHAR(BIRTHDATE, 'YYYY') >= '1990';",
		answerImage: 'Answer14.png'
	},
	Q15: {
		id: 'Q15',
		title: 'Question 15',
		question: '請統計本公司各部門的名稱、人數、平均工作年數(系統日與到職日差距，無條件捨去小數位數，未滿一年以0年表示)、該部門最年長者出生日期、該部門最年輕者出生日期(日期格式皆為年-月-日)，若無資料則空欄位表示，並產出如下資料表內容',
		image: ['Employees.png'],
		hint: 'LEFT JOIN、GROUP BY、COUNT、DATE、AVG、FLOOR、MAX、MIN',
		answer: "SELECT DEP.NAME, COUNT(EMP.ID) AS EMPCNT, AVG(FLOOR(SYSDATE - EMP.HIREDATE)) AS AVGYEAR, TO_CHAR(MAX(EMP.BIRTHDATE), 'YYYY-MM-DD') AS ELDER, TO_CHAR(MIN(EMP.BIRTHDATE), 'YYYY-MM-DD') AS YOUNGER FROM DEPARTMENTS DEP LEFT JOIN EMPLOYEES EMP ON DEP.ID = EMP.DEPARTMENTID GROUP BY DEP.ID, DEP.NAME;",
		answerImage: 'Answer15.png'
	},
	/* SQL Fiddle不支援SP語法，故暫時不給予練習
	Q8: {
		id: 'Q8',
		title: 'Question 8',
		question: '新增EMPLOYEES_LOG資料表，供紀錄異動操作使用，欄位同於EMPLOYEES，另增加ALTER_TIMESTAMP(紀錄操作當下時間)與ALTER_TYPE(I:紀錄INSERT動作、D:紀錄DELETE動作、U紀錄UPDATE動作)欄位',
		image: '',
		hint: 'CREATE',
		answer: "CREATE TABLE EMPLOYEES_LOG ( "
				+ "<br/> ID INT NOT NULL, -- 員工ID "
				+ "<br/> NAME NVARCHAR(20) NOT NULL,	-- 姓名 "
				+ "<br/> GENDER VARCHAR(1) NULL, -- 性別：M男性、F女性、NULL "
				+ "<br/> BIRTHDATE DATE NULL, -- 出生日期 "
				+ "<br/> HIREDATE DATE NOT NULL, -- 到職日期 "
				+ "<br/> EXTENSION VARCHAR(5) NULL, -- 分機號碼 "
				+ "<br/> ADDRESS NVARCHAR(200) NULL, -- 地址 "
				+ "<br/> MANAGERID INT NULL, -- 主管ID "
				+ "<br/> DEPARTMENTID INT NOT NULL, -- 部門ID "
				+ "<br/> ALTER_TIMESTAMP TIMESTAMP NOT NULL, -- 紀錄操作時間 "
				+ "<br/> ALTER_TYPE VARCHAR(1) NOT NULL -- I:Insert、D:Delete、U:Update "
				+ ");"
	},
	Q9: {
		id: 'Q9',
		title: 'Question 9',
		question: '請建立一個EMPOLYEES_TRIGGER，當針對EMPLOYEES異動執行INSERT、UPDATE、DELETE指令時，將操作紀錄寫入EMPLOYEES_LOG',
		image: '',
		hint: 'TRIGGER',
		answer: "CREATE OR REPLACE TRIGGER IUD_EMPLOYEES BEFORE INSERT OR DELETE OR UPDATE ON EMPLOYEES "
				" <br/> FOR EACH ROW "
				" <br/> BEGIN "
				" <br/> -- 新增 "
				" <br/> IF INSERTING THEN "
				" <br/> 	-- 只能使用 :NEW.<Column_Name> 運作 "
				" <br/> 	INSERT INTO EMPLOYEES_LOG (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID, ALTER_TIMESTAMP, ALTER_TYPE)  "
				" <br/> 	VALUES (new.ID, new.NAME, new.GENDER, new.BIRTHDATE, new.HIREDATE, new.EXTENSION, new.ADDRESS, new.MANAGERID, new.DEPARTMENTID, SYSTIMESTAMP, 'I'); "
				" <br/> -- 修改 "
				" <br/> ELSIF UPDATING THEN "
				" <br/> 	-- 可以使用 :NEW.<Column_Name> / :OLD.<Column_Name> 運作 "
				" <br/> 	INSERT INTO EMPLOYEES_LOG (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID, ALTER_TIMESTAMP, ALTER_TYPE)  "
				" <br/> 	VALUES (old.ID, old.NAME, old.GENDER, old.BIRTHDATE, old.HIREDATE, old.EXTENSION, old.ADDRESS, old.MANAGERID, old.DEPARTMENTID, SYSTIMESTAMP, 'U'); "
				" <br/> -- 刪除 "
				" <br/> ELSIF DELETING THEN "
				" <br/> 	-- 只能使用 :OLD.<Column_Name> 運作 "
				" <br/> 	INSERT INTO EMPLOYEES_LOG (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID, ALTER_TIMESTAMP, ALTER_TYPE)  "
				" <br/> 	VALUES (old.ID, old.NAME, old.GENDER, old.BIRTHDATE, old.HIREDATE, old.EXTENSION, old.ADDRESS, old.MANAGERID, old.DEPARTMENTID, SYSTIMESTAMP, 'D'); "
				" <br/> END IF; "
				" <br/> END; "
	},
	*/
	Q16: {
		id: 'Q16',
		title: 'Question 16',
		question: '一位新報到員工加入業務開發部門(SD)，姓名:王曉明、出生:2000/12/31、性別:男、到職日為今日、員工ID為36',
		image: ['Employees.png'],
		hint: 'INSERT',
		answer: "INSERT INTO EMPLOYEES (ID, NAME, BIRTHDATE, GENDER, DEPARTMENTID, HIREDATE) VALUES ('36', '王曉明', TO_DATE('2000/12/31', 'YYYY/MM/DD'), 'M', (SELECT ID FROM DEPARTMENTS WHERE CODE = 'SD'), SYSDATE); ",
		answerImage: 'Answer16.png'
	},
	Q17: {
		id: 'Q17',
		title: 'Question 17',
		question: '欲獨立出各部門主管的資料於一資料表中(已存在，MANAGERS)，ALTER_TIMESTAMP為當下時間，請用INSERT INTO SELECT語法完成',
		image: ['Managers.png'],
		hint: 'INSERT INTO SELECT、SYSDATE、SYSTIMESTAMP',
		answer: "INSERT INTO MANAGERS (EMPLOYEEID, DEPARTMENTID, ALTER_TIMESTAMP) SELECT ID, DEPARTMENTID, SYSTIMESTAMP FROM EMPLOYEES WHERE MANAGERID IS NULL ; ",
		answerImage: 'Answer17.png'
	},
	Q18: {
		id: 'Q18',
		title: 'Question 18',
		question: '王曉明補上其餘個人資料，地址：新北市三重區重新路一段500號、分機號碼：51111',
		image: ['Employees.png'],
		hint: 'UPDATE',
		answer: "UPDATE EMPLOYEES SET ADDRESS = '新北市三重區重新路一段500號', EXTENSION = '51111' WHERE NAME = '王曉明'; ",
		answerImage: 'Answer18.png'
	},
	Q19: {
		id: 'Q19',
		title: 'Question 19',
		question: '請刪除「品質保管」部門',
		image: ['Departments.png'],
		hint: 'DELETE',
		answer: "DELETE FROM DEPARTMENTS WHERE CODE = 'QA'; ",
		answerImage: 'Answer19.png'
	},
	Q20: {
		id: 'Q20',
		title: 'Question 20',
		question: '今天有人事異動，陳季暄退休，故須將其資料刪除，並將其所帶之部屬移轉給呂天生，呂天生升任為行銷企劃部門主管',
		image: [],
		hint: 'UPDATE、DELETE',
		answer: "UPDATE EMPLOYEES SET MANAGERID = NULL WHERE NAME = '呂天生'; "
			+ "<br/> UPDATE EMPLOYEES SET MANAGERID = (SELECT ID FROM EMPLOYEES WHERE NAME = '呂天生') WHERE MANAGERID = (SELECT ID FROM EMPLOYEES WHERE NAME = '陳季暄'); "
			+ "<br/> DELETE FROM EMPLOYEES WHERE NAME = '陳季暄'; ",
		answerImage: 'Answer20.png'
	}
};