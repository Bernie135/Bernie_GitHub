CREATE SCHEMA RpTest;
USE RpTest;

-- 此處開始為DDL語法
CREATE TABLE DEPARTMENTS (
	ID INT NOT NULL, -- 部門ID
	CODE VARCHAR(2) NOT NULL, -- 部門代碼
	NAME VARCHAR(20) NOT NULL, -- 部門名稱
	PRIMARY KEY (ID)
);

CREATE TABLE EMPLOYEES (
	ID INT NOT NULL, -- 員工ID
	NAME VARCHAR(20) NOT NULL,	-- 姓名departments
	GENDER VARCHAR(1) NULL, -- 性別：M男性、F女性、NULL
	BIRTHDATE DATE NULL, -- 出生日期
	HIREDATE DATE NOT NULL, -- 到職日期
	EXTENSION VARCHAR(5) NULL, -- 分機號碼
	ADDRESS VARCHAR(200) NULL, -- 地址
	MANAGERID INT NULL, -- 主管ID
	DEPARTMENTID INT NOT NULL, -- 部門ID
	PRIMARY KEY (ID),
    CONSTRAINT FK_EMPLOYEEDEPT FOREIGN KEY (DEPARTMENTID) REFERENCES DEPARTMENTS(ID)
);

CREATE TABLE TRAINING (
	EMPLOYEEID INT NOT NULL, -- 員工編號
	TYPE VARCHAR(1) NOT NULL, -- 訓練類型
	GRADE VARCHAR(1) NOT NULL -- 訓練成績：1-5
);

CREATE TABLE MANAGERS (
	EMPLOYEEID INT NOT NULL,
	DEPARTMENTID INT NOT NULL,
	ALTER_TIMESTAMP TIMESTAMP NOT NULL
);

-- 此處開始為DML語法
-- 請依照COMMIT語法作為分次斷點，執行多次寫入資料(因SQL Fiddle有單次傳輸大小上限)
INSERT INTO DEPARTMENTS (ID, CODE, NAME) VALUES (1, 'HR', '人力資源');
INSERT INTO DEPARTMENTS (ID, CODE, NAME) VALUES (2, 'MA', '行銷企劃');
INSERT INTO DEPARTMENTS (ID, CODE, NAME) VALUES (3, 'RD', '產品研發');
INSERT INTO DEPARTMENTS (ID, CODE, NAME) VALUES (4, 'SD', '業務開發');
INSERT INTO DEPARTMENTS (ID, CODE, NAME) VALUES (5, 'QA', '品質保管');
COMMIT;


INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (1, '張瑾雯', 'F', DATE_FORMAT('19610409', '%Y%m%d'), DATE_FORMAT('19851209', '%Y%m%d'), '32389', '台北市中山區中山北路一段7號', NULL, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (2, '陳季暄', 'M', DATE_FORMAT('19501211', '%Y%m%d'), DATE_FORMAT('19751111', '%Y%m%d'), '32690', '桃園市中壢區八德路111號', NULL, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (3, '趙飛燕', 'F', DATE_FORMAT('19560205', '%Y%m%d'), DATE_FORMAT('19760403', '%Y%m%d'), '31348', '台北市中正區紹興南路99號', NULL, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (4, '林美麗', 'F', DATE_FORMAT('19880318', '%Y%m%d'), DATE_FORMAT('20160707', '%Y%m%d'), '31579', '高雄市一心二路675號', NULL, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (5, '劉天王', 'M', DATE_FORMAT('19721009', '%Y%m%d'), DATE_FORMAT('20081101', '%Y%m%d'), '36594', '', NULL, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (6, '黎國明', 'M', DATE_FORMAT('19590505', '%Y%m%d'), DATE_FORMAT('19810301', '%Y%m%d'), '21432', '新竹市富明街72巷16號', 1, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (7, '郭國臹', 'M', DATE_FORMAT('19630908', '%Y%m%d'), DATE_FORMAT('19850718', '%Y%m%d'), '45634', '', 3, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (8, '蘇涵蘊', NULL, DATE_FORMAT('19680304', '%Y%m%d'), DATE_FORMAT('19900103', '%Y%m%d'), '23454', '台北市木柵三路100號5樓', 3, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (9, '孟庭亭', NULL, DATE_FORMAT('19770401', '%Y%m%d'), DATE_FORMAT('20070801', '%Y%m%d'), '45673', '', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (10,'賴俊良', NULL, DATE_FORMAT('19791030', '%Y%m%d'), DATE_FORMAT('19990910', '%Y%m%d'), '38552', '', 1, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (12,'何大樓', NULL, DATE_FORMAT('19831116', '%Y%m%d'), DATE_FORMAT('20051210', '%Y%m%d'), '35964', '', 2, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (13,'王大德', NULL, DATE_FORMAT('19731204', '%Y%m%d'), DATE_FORMAT('19951114', '%Y%m%d'), '23794', '高雄市文衡一路123號', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (14,'林正明', NULL, DATE_FORMAT('19840912', '%Y%m%d'), DATE_FORMAT('20071203', '%Y%m%d'), '89245', '', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (15,'劉文林', NULL, DATE_FORMAT('19850714', '%Y%m%d'), DATE_FORMAT('20040401', '%Y%m%d'), '45976', '台中市鎮北路96號', 1, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (16,'李友吉', NULL, DATE_FORMAT('19820617', '%Y%m%d'), DATE_FORMAT('20000101', '%Y%m%d'), '43505', '', 4, 3);
COMMIT;

INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (17,'侯碧元', NULL, DATE_FORMAT('19770509', '%Y%m%d'), DATE_FORMAT('19980805', '%Y%m%d'), '34209', '', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (18,'文芳芳', 'F', DATE_FORMAT('19760819', '%Y%m%d'), DATE_FORMAT('19960309', '%Y%m%d'), '95049', '', 3, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (19,'呂天生', 'M', DATE_FORMAT('19790910', '%Y%m%d'), DATE_FORMAT('19990512', '%Y%m%d'), '95076', '台北市師大路67號', 2, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (20,'陳  旻', 'M', DATE_FORMAT('19810201', '%Y%m%d'), DATE_FORMAT('20021003', '%Y%m%d'), '49073', '', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (21,'蔡一心', 'F', DATE_FORMAT('19880315', '%Y%m%d'), DATE_FORMAT('20091008', '%Y%m%d'), '43293', '', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (22,'田登文', 'M', DATE_FORMAT('19881210', '%Y%m%d'), DATE_FORMAT('20091201', '%Y%m%d'), '90584', '台中市文化路700號', 1, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (23,'嚴  正', 'M', DATE_FORMAT('19891003', '%Y%m%d'), DATE_FORMAT('20070502', '%Y%m%d'), '39099', '', 2, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (24,'王明田', 'M', DATE_FORMAT('19850801', '%Y%m%d'), DATE_FORMAT('20060805', '%Y%m%d'), '49087', '', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (25,'林天生', 'F', DATE_FORMAT('19810101', '%Y%m%d'), DATE_FORMAT('20040312', '%Y%m%d'), '29018', '台北市北平東路24 號3 樓之一', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (26,'湯玉婷', 'F', DATE_FORMAT('19900710', '%Y%m%d'), DATE_FORMAT('20110409', '%Y%m%d'), '76085', '台北市北平東路24 號3 樓之一', 3, 2);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (27,'林秀吉', 'F', DATE_FORMAT('19900919', '%Y%m%d'), DATE_FORMAT('20130802', '%Y%m%d'), '45896', '台北市北平東路24 號3 樓之一', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (28,'毛高雯', 'F', DATE_FORMAT('19900514', '%Y%m%d'), DATE_FORMAT('20131107', '%Y%m%d'), '68598', '高雄縣鳳山市澄清路255巷532號', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (29,'蔡天林', 'M', DATE_FORMAT('19910719', '%Y%m%d'), DATE_FORMAT('20141209', '%Y%m%d'), '80486', '台中市復興一路333巷555號6樓', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (30,'傅文章', 'M', DATE_FORMAT('19911031', '%Y%m%d'), DATE_FORMAT('20140615', '%Y%m%d'), '90449', '台北市南京東路三段3號', 1, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (31,'劉富生', 'M', DATE_FORMAT('19950219', '%Y%m%d'), DATE_FORMAT('20160819', '%Y%m%d'), '08835', '台北市北平東路24號', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (32,'呂應宏', 'M', DATE_FORMAT('19930123', '%Y%m%d'), DATE_FORMAT('20161109', '%Y%m%d'), '03458', '高雄縣武廟路912號', 1, 1);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (33,'李石柱', 'M', DATE_FORMAT('19920715', '%Y%m%d'), DATE_FORMAT('20160208', '%Y%m%d'), '06894', '台南市中正二路3421號', 5, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (34,'黃智文', 'M', DATE_FORMAT('19920321', '%Y%m%d'), DATE_FORMAT('20150321', '%Y%m%d'), '43503', '高雄縣崗山鎮光復路150巷5號3樓', 4, 3);
INSERT INTO EMPLOYEES (ID, NAME, GENDER, BIRTHDATE, HIREDATE, EXTENSION, ADDRESS, MANAGERID, DEPARTMENTID) VALUES (35,'丁慧語', 'F', DATE_FORMAT('19920221', '%Y%m%d'), DATE_FORMAT('20150527', '%Y%m%d'), '59908', '', 5, 3);
COMMIT;

INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (24, 'A', 2);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (24, 'B', 5);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (26, 'B', 3);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (27, 'B', 4);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (27, 'C', 4);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (30, 'C', 5);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (31, 'A', 2);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (31, 'B', 4);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (31, 'C', 3);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (32, 'B', 3);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (33, 'A', 5);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (33, 'C', 4);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (34, 'B', 5);
INSERT INTO TRAINING (EMPLOYEEID, TYPE, GRADE) VALUES (35, 'B', 3);
COMMIT;