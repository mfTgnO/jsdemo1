`yw_10``basicmaterialtable`
SELECT * FROM `hr_8` WHERE y23 LIKE '初级项目助理(实习)';

SELECT lid,y01 FROM `hr_8` WHERE y02 = '沈锋';
SELECT * FROM `hr_8` WHERE y02 = '沈锋';
SELECT * FROM `hr_8` WHERE lid = '396680631620206592';


SELECT * FROM yw_23a WHERE y01 = 'gcb' AND y02 = '工程部';
SELECT * FROM yw_23a WHERE y01 = '402417819301445632' AND y02 = '蛙小侠模板';

SELECT y03 FROM yw_23a WHERE y01 = 'cjxmzlsx' AND y02 = '初级项目助理(实习)'
-- 按照审批流程ID和当前用户在该审批流程中所处的流程升序查找
SELECT * FROM yw_23a WHERE y04 = '410086531705864192' AND y03 > '1' ORDER BY y03 ASC;
SELECT * FROM yw_23a WHERE y04 = '410086531705864192' ORDER BY y03 DESC;

-- 行列转换
SELECT 
DISTINCT year_,
SUM(CASE WHEN MONTH = '1' THEN amount ELSE 0 END ) m1,
SUM(CASE WHEN MONTH = '2' THEN amount ELSE 0 END ) m2,
SUM(CASE WHEN MONTH = '3' THEN amount ELSE 0 END ) m3,
FROM sales GROUP BY year_;

-- MySQL Query with Multiple Tables
SELECT * FROM 
UserInfoTbl INNER JOIN UserPvTbl 
ON UserInfoTbl.username=UserPvTbl.fusename
WHERE UserPvTbl.usename='user0003';
 
SELECT U.*
FROM UserInfoTbl U
INNER JOIN UserPvTbl UP
ON U.username  = UP.fusername  
WHERE UP.username = 'user0003';

-- localhost
SELECT COUNT(*) FROM dbuser;

-- 3.2 Entering Queries
-- https://dev.mysql.com/doc/refman/5.7/en/entering-queries.html

-- 查看数据库
SHOW DATABASES;
-- Here is a simple query that asks the server to tell you its version number and the current date. Type it in as shown here following the mysql> prompt and press Enter: 
SELECT VERSION(),CURRENT_DATE;
-- Keywords may be entered in any lettercase. The following queries are equivalent: 
SELECT VERSION(), CURRENT_DATE;
SELECT VERSION(), CURRENT_DATE;
SELECT VERSION(), CURRENT_DATE;
-- Here is another query. It demonstrates that you can use mysql as a simple calculator: 
SELECT SIN(PI()),(4+1)*5;
SELECT SIN(PI()/4),(4+1)*5;
SELECT PI(),(4+1)*5;
-- The queries shown thus far have been relatively short, single-line statements. You can even enter multiple statements on a single line. Just end each one with a semicolon: 
SELECT VERSION();SELECT CURRENT_DATE();SELECT NOW();
-- A query need not be given all on a single line, so lengthy queries that require several lines are not a problem. mysql determines where your statement ends by looking for the terminating semicolon,
-- not by looking for the end of the input line. (In other words, mysql accepts free-format input: it collects input lines but does not execute them until it sees the semicolon.) 
-- Here is a simple multiple-line statement: 
SELECT
USER()
,
CURRENT_DATE;
-- If you decide you do not want to execute a query that you are in the process of entering, cancel it by typing \c: 
SELECT
USER()
\c
-- You can use the test database (if you have access to it) for the examples that follow, but anything you create in that database can be removed by anyone else with access to it. 
-- For this reason, you should probably ask your MySQL administrator for permission to use a database of your own. Suppose that you want to call yours menagerie. The administrator needs to execute a statement like this: 
GRANT ALL ON menagerie.* TO 'your_mysql_name'@'your_client_host';
-- where your_mysql_name is the MySQL user name assigned to you and your_client_host is the host from which you connect to the server. 

-- 3.3.1 Creating and Selecting a Database
-- If the administrator creates your database for you when setting up your permissions, you can begin using it. Otherwise, you need to create it yourself: 
CREATE DATABASE menagerie;
USE menagerie;
SHOW TABLES;
-- Your database needs to be created only once, but you must select it for use each time you begin a mysql session. You can do this by issuing a USE statement as shown in the example. Alternatively,
-- you can select the database on the command line when you invoke mysql. Just specify its name after any connection parameters that you might need to provide. For example: 

-- mysql -h host -u user -p menagerie
-- Enter password: ********

-- You can see at any time which database is currently selected using SELECT DATABASE(). 
SELECT DATABASE();


-- 3.3.2 Creating a Table
-- Creating the database is the easy part, but at this point it is empty, as SHOW TABLES tells you: 
SHOW TABLES;

-- 查找项目
SELECT * FROM yw_10a WHERE  g01=1  AND y01 ='396667575200645120';
SELECT * FROM yw_10 WHERE lid IN (SELECT y09 FROM yw_10a WHERE  g01=1  AND y01 ='396667575200645120');
SELECT * FROM yw_10 WHERE lid IN (SELECT y09 FROM yw_10a WHERE  g01=1  AND y01 ='396667575200645120') AND yw_10.y57 LIKE '%33%';
SELECT * FROM yw_10 INNER JOIN yw_10a ON yw_10.lid = yw_10a.y09 WHERE yw_10a.g01='1'  AND yw_10a.y01 ='396667575200645120' AND yw_10.y57 LIKE '%33%';
SELECT COUNT(*) FROM yw_10 INNER JOIN yw_10a ON yw_10.lid = yw_10a.y09 WHERE yw_10a.g01='1'  AND yw_10a.y01 ='396667575200645120' AND yw_10.y57 LIKE '%33%';

SELECT * FROM yw_10 WHERE lid IN (SELECT y09 FROM yw_10a WHERE  g01=?  AND y01 = ? ) AND yw_10.y57 LIKE ?,输入参数=["1","396667575200645120","%33%"]

-- 20180312
-- 登录用户:汪连德
-- 预算造价>基础材料库:人`yw_1`工(代号:r),(材料:c)

-- 20180313
-- 木工材料导入
SELECT * FROM basicmaterialtable;
INSERT INTO basicmaterialtable (y01,y03,y02,y04,y05,y06,y14,y15,y18) VALUES ('M1', 'mg', '木工板', '2440mm*1220mm*16.5mm/杉木', '张', '100.0', '不含', '不含','无');
INSERT INTO basicmaterialtable (y01,y03,y02,y04,y05,y06,y14,y15,y18) VALUES (M1, mg, 木工板, 2440mm*1220mm*16.5mm/杉木, 张, 100.0, 不含, 不含,无);
INSERT INTO basicmaterialtable(lid,y01,y03,y02,y04,y05,y06,y14,y15,y18) VALUES('6da8218249fe456586e8e58b759d9b40','M1','木工','木工板','2440mm*1220mm*16.5mm/杉木','张','100.0','不含','不含','');
INSERT INTO basicmaterialtable(lid,y01,y03,y02,y04,y05,y06,y14,y15,y18) VALUES('6da8218249fe456586e8e58b759d9b40','M1',木工,木工板,'2440mm*1220mm*16.5mm杉木',张,100.0,不含,不含,'');

INSERT INTO basicmaterialtable(lid,y01,y03,y02,y04,y05,y06,y14,y15,y18) VALUES('9e8039f11a4a4691bd66598f9d3a9792','M1','木工','木工板','2440mm*1220mm*16.5mm/杉木','张','100.0','1','1','');

SELECT * FROM hr_8;
SELECT COUNT(*) FROM hr_8;
SELECT * FROM hr_8 WHERE  y02 LIKE "%汪%";
SELECT COUNT(*) FROM hr_8 WHERE  y02 LIKE "%张三%";
DELETE FROM hr_8 WHERE  y02 LIKE "%张三%";

-- 
SELECT * FROM yw_4;
SELECT COUNT(*) FROM yw_4 WHERE y06='0';
SELECT * FROM yw_4 WHERE y06='0';
SELECT COUNT(*) FROM yw_4 WHERE y06='0' ORDER BY y08;

-- 基本费率
SELECT COUNT(*) rows_total FROM yw_7 WHERE g01 = '1';
SELECT * FROM yw_7 WHERE g01 = '1';

-- 单位定额汇总模板
SELECT COUNT(*) rows_total FROM yw_8 WHERE g01 = '1';
SELECT * FROM yw_8 WHERE g01 = '1';

-- 读取预算人才机构成
SELECT * FROM yw_6a WHERE g01='1';
SELECT * FROM yw_6a;

-- 工程单位索引
SELECT * FROM yw_4 WHERE y06='0' AND y07='1';
-- 402536844983533568
-- 读取非根节点
SELECT * FROM yw_4 WHERE y06 != '0' AND y14='419171747191848960';

SELECT * FROM yw_4 WHERE y06='0' AND y07='1' AND y08 LIKE "%409469160205058048%";
-- 非叶子节点
-- 单据yw_24
-- 单据内容yw_24a

-- SELECT * FROM yw_24 WHERE  g01=?  AND g02 = ? AND y06 LIKE ? <ORDER> <LIMIT>,输入参数=["1","396680631620206592","%报销单%"]
SELECT * FROM yw_24 WHERE g01='1'  AND g02 = '396680631620206592' AND y06 LIKE "%报销单%";
-- 单据代码:y01
SELECT SUM(y34) FROM yw_24a WHERE y01='426455885338902528';

SELECT SUM(yw_24a.y34) FROM yw_24,yw_24a WHERE g01='1' AND g02 = '396680631620206592' AND y06 LIKE "%报销单%" AND yw_24.lid=yw_24a.y01;

SELECT SUM(yw_24a.y34) FROM yw_24,yw_24a WHERE yw_24.g01='1' AND yw_24.g02 = '396680631620206592' AND yw_24.y06 LIKE "%报销单%" AND yw_24.lid=yw_24a.y01 GROUP BY yw_24.lid;

-- 材料费
SELECT yw_24.y12,SUM(yw_24a.y34) FROM yw_24,yw_24a WHERE yw_24.g01='1' AND yw_24.g02 = '396680631620206592' AND yw_24.y06 LIKE "%报销单%" AND yw_24.lid=yw_24a.y01 AND yw_24.y12="材料费" GROUP BY yw_24.lid;
-- 差旅费
SELECT yw_24.y12,(SUM(yw_24a.y21) + SUM(yw_24a.y23) + SUM(yw_24a.y25)) AS total FROM yw_24,yw_24a WHERE yw_24.g01='1' AND yw_24.g02 = '396680631620206592' AND yw_24.y06 LIKE "%报销单%" AND yw_24.lid=yw_24a.y01 AND yw_24.y12="差旅费" GROUP BY yw_24.lid;
-- 运输费,搬运费
SELECT yw_24.lid,yw_24.y12,SUM(yw_24a.y04) FROM yw_24,yw_24a WHERE yw_24.g01='1' AND yw_24.g02 = '396680631620206592' AND yw_24.y06 LIKE "%报销单%" AND yw_24.lid=yw_24a.y01 AND yw_24.y12 NOT IN ("材料费","差旅费") GROUP BY yw_24.lid;


-- 运输费,搬运费
UPDATE yw_24 SET yw_24.y29 = 
(
SELECT SUM(y04) FROM yw_24a WHERE g01='1' AND y01='426746189744963584'
)
WHERE lid = '426746189744963584';
-- 材料费
UPDATE yw_24 SET yw_24.y29 = 
(
SELECT SUM(y34) FROM yw_24a WHERE g01='1' AND y01='426746959458467840'
)
WHERE lid = '426746959458467840';
-- 差旅费
UPDATE yw_24 SET yw_24.y29 = 
(
SELECT COALESCE((SUM(y21) + SUM(y23) + SUM(y25)),0) FROM yw_24a WHERE g01='1' AND y01='426788087960436736'
)
WHERE lid = '426788087960436736';

SELECT * FROM yw_24a WHERE y01 = '426788087960436736';
SELECT * FROM yw_24 WHERE yw_24.lid = '426746595229302784';

-- IFNULL(expr1,expr2)
SELECT IFNULL(1,2);
SELECT IFNULL(NULL,2);
SELECT IFNULL(1/0,2);
SELECT IFNULL(1/0,'hello');

-- 
SHOW DATABASES;
SHOW TABLES;
USE demo;
CREATE TABLE tmp SELECT IFNULL(1,'test') AS test;
DESCRIBE tmp;

-- nullif
SELECT NULLIF(1,1);
SELECT NULLIF(1,2);

-- case
SELECT CASE 1 WHEN 1 THEN 'one'
	WHEN 2 THEN 'two' ELSE 'more' END;
	
SELECT CASE WHEN 0>0 THEN 'true' ELSE 'false' END;

SELECT CASE BINARY 'c'
	WHEN 'a' THEN 1 WHEN 'b' THEN 2 END;
	
SELECT y01 FROM yw_24a GROUP BY y01; 

--
SELECT COALESCE(SUM(y29),0) FROM yw_24 WHERE g01 = '1' AND g02 = '396680631620206592';
SELECT COALESCE(SUM(y28),0) FROM yw_24 WHERE g01 = '1' AND g02 = '396680631620206592';
SELECT COALESCE(SUM(y29),0) AS y29,COALESCE(SUM(y28),0) AS y28 FROM yw_24 WHERE g01 = '1' AND g02 = '396680631620206592';

SELECT COALESCE(SUM(y29),0) FROM yw_24 WHERE g01 = '1' AND g02 = '396668946402508800';

-- 396666985137569792  汪叶龙 沈锋 396680631620206592

-- 汪叶龙 396664810218979328
SELECT yw_10.* FROM yw_10,yw_10a WHERE yw_10.lid = yw_10a.y09 AND yw_10a.y01 = '396664810218979328';
-- 
SELECT * FROM yw_10b WHERE y13 = '402417819301445632';
SELECT * FROM yw_10b WHERE y13 = '402550089882533888';

-- 沈锋 396680631620206592
SELECT yw_10.* FROM yw_10,yw_10a WHERE yw_10.lid = yw_10a.y09 AND yw_10a.y01 = '396680631620206592';
SELECT * FROM yw_10b WHERE y13 = '402417819301445632';

SELECT yw_10.* FROM yw_10,yw_10a WHERE yw_10.lid = yw_10a.y09 AND yw_10a.y01 = '20171010165254488'
SELECT COUNT(*) FROM yw_10,yw_10a WHERE yw_10.lid = yw_10a.y09 AND yw_10a.y01 = '396664810218979328';

-- yw_10b.y14施工人员身份证号
-- bd_5.y02施工人员身份证号
-- 422768033790951424 
-- 429296942225293312

-- yw_10.lidx	项目Lid
SELECT * FROM yw_10b WHERE y13 = '402417819301445632';
SELECT * FROM yw_10 WHERE lid = '402550089882533888';
SELECT * FROM yw_10b WHERE y13 = '402550089882533888';
-- 王五lid:416918957384007680 ID:2333333333333

SELECT COUNT(*) FROM yw_10,yw_10a WHERE yw_10.lid = yw_10a.y09 AND yw_10.g01 = '1' AND yw_10a.y01 = '396664810218979328';

-- 施工人员保险信息
SELECT * FROM yw_10b WHERE y16 <> '';

SELECT * FROM yw_10b WHERE y17 <> '' AND y17 IS NOT NULL;

UPDATE yw_10b SET y18 = 1 y21 = '2018-03-31 16:49:49' WHERE  g01 = '1' AND lid = '416918957384007680';
SELECT * FROM yw_10b WHERE lid = '416918957384007680' AND g01 = '1'; 

-- 2018/04/03
SELECT oid FROM yw_51;
SELECT COUNT(*) rows_total FROM yw_51;
SELECT * FROM yw_51;
SELECT * FROM yw_51 WHERE  g01 = '1';
-- queyr yw_55
SELECT y11 AS y03 FROM yw_55 WHERE g01 = '1' AND oid = '9';
-- query workkind
SELECT y03 FROM yw_51 WHERE  g01 = '1' AND y02 LIKE '%泥工%';

SELECT y03 FROM yw_51 WHERE g01 = '1' AND lid = '432086143933087744';

-- 04.09

INSERT INTO yw_55 (y02) VALUES ('张三');
SELECT * FROM yw_55;

-- 
SELECT y20 AS contractContent FROM yw_16 WHERE g01 = '1' AND lid = '2647691275831296';

SELECT * FROM yw_51 WHERE lid = '433567667379503104';
-- delete from yw_51
DELETE FROM yw_16 WHERE y06 LIKE '%杭%';
SELECT * FROM yw_16;

-- find subcontractorContract
SELECT y20 FROM yw_16 WHERE lid = '434042172031893504' AND g01 = '1';

-- 
SELECT * FROM yw_16 WHERE lid = '434041342847352832';
SELECT * FROM yw_51 WHERE lid = '432086143933087744';

-- getSubcontractContractNum
SELECT d02 AS num FROM xt_0 WHERE d01 = 'yw_16';
UPDATE xt_0 SET d02 = '05' WHERE d01 = 'yw_16';

-- 
SELECT DISTINCT(d03),d04,d05,d06,d07,d08,d09 FROM xt_6 WHERE d01='20171010165254488' AND d08='project' ORDER BY (d07+0) ASC;

SELECT * FROM xt_6;`yw_1``xt_0`

INSERT INTO yw_74 (lid,y01,y02,y03,y04,y05) VALUES();
-- query yw_74
SELECT * FROM yw_74; -- y01,y03
SELECT * FROM yw_74 WHERE y02 = '1b3ac8945659485ab5588c65d30133fb';
SELECT * FROM bd_1;


SELECT * FROM bd_1 WHERE y03 = 0;
SELECT * FROM yw_76 WHERE y03 = 0;
SELECT * FROM yw_76; -- y01,y02
-- y01:01,02
SELECT * FROM yw_76 WHERE y03 IN (01,02);
SELECT * FROM yw_74 WHERE y02 IN ('171840a69cc943d7936ea37a28bb48a8','bbfb5c6a4b44478d9ef0704b2948551f');

SELECT * FROM yw_74 WHERE y01 = '021503b34fd54fc38b82f5c79e19622e';
SELECT * FROM yw_74 WHERE y01 = '81edb0e73a2d4c6680ab85eb9bd989db';
DELETE FROM yw_74 WHERE y02 = '021503b34fd54fc38b82f5c79e19622e';

SELECT y03 FROM hr_1;

SELECT * FROM yw_82;
SHOW TABLES;
DESC yw_80;

SELECT * FROM yw_10 WHERE g01 = '1' AND lid = '419171747191848960';
SELECT * FROM yw_80 WHERE g01 = '1' AND y01 = '419171747191848960';
SELECT lid,y01,y02,y03,y04,y05 FROM yw_74,yw_80 WHERE yw_74.lid = yw_80.y02;
SELECT yw_74.lid,yw_74.y01,yw_74.y02,yw_74.y03,yw_74.y04,yw_74.y05,yw_80.y03 FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02; 
SELECT yw_74.*,yw_80.y03 FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02 WHERE yw_80.y01 = ''; 
-- yw_74.lid,yw_74.y01,yw_74.y02,yw_74.y03,yw_74.y04,yw_74.y05,yw_80.y03
SELECT yw_74.lid,yw_74.y01,yw_74.y02,yw_74.y03,yw_74.y04,yw_74.y05,yw_80.y03,yw_80.y04 FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02 WHERE yw_74.g01 = '1' AND yw_80.y01 = '' AND yw_74.y02 = '81edb0e73a2d4c6680ab85eb9bd989db'; 
SELECT yw_74.lid,yw_74.y01,yw_74.y02,yw_74.y03,yw_74.y04,yw_74.y05 FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02 WHERE yw_74.g01 = '1' AND yw_74.y02 = '81edb0e73a2d4c6680ab85eb9bd989db'; 

SELECT yw_74.*,yw_80.y03 AS score ,yw_80.y01 AS 80y01 FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02  WHERE  yw_74.y02 = '0' AND yw_80.y01 = '402417819301445632';
SELECT * FROM yw_10 WHERE g01 = '1';
SELECT * FROM yw_10 WHERE y02 LIKE  '%小%' ;
SELECT COUNT(*) FROM yw_10 WHERE y02 LIKE  '%小%' ;
SELECT * FROM yw_80;
-- 2661736417658880 	yw_80.y01:projectNum 	 yw_80.y02:assessmentNum
SELECT yw_74.*,yw_80.y03 AS score ,yw_80.y01 AS projectNum FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02  WHERE  yw_80.y02 = '2661736417658880' AND yw_80.y01 = '402417819301445632';
SELECT yw_74.*,yw_80.y03 AS score ,yw_80.y01 AS projectNum FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02  WHERE  yw_80.y02 = '0';

SELECT yw_74.*,yw_80.y03 AS score ,yw_80.y01 AS projectNum FROM yw_74 LEFT JOIN yw_80 ON yw_74.lid = yw_80.y02  WHERE  yw_80.y02 = '81edb0e73a2d4c6680ab85eb9bd989db'  AND yw_80.y01 = '402417819301445632'

-- 402417819301445632,81edb0e73a2d4c6680ab85eb9bd989db
SELECT y03, y04 FROM yw_80 WHERE y01 = '402417819301445632' AND y02 = 'c3b0138e40124f3da9e848179fef1c59';
SELECT y03, y04 FROM yw_80 WHERE y01 = '402417819301445632' AND y02 = '81edb0e73a2d4c6680ab85eb9bd989db';
SELECT SUM(y03),COUNT(*) AS score FROM yw_80 WHERE y01 = '402417819301445632' AND y02 = '81edb0e73a2d4c6680ab85eb9bd989db';`yw_80`

SELECT yw_10.lid,yw_80.y01,100 - COALESCE(SUM(yw_80.y03),0) AS score FROM yw_10 LEFT JOIN yw_80 ON yw_10.lid = yw_80.y01 GROUP BY yw_10.lid;
SELECT COUNT(*) FROM yw_10;

SELECT yw_10.lid,100 - COALESCE(SUM(yw_80.y03),0) AS score FROM yw_10 LEFT JOIN yw_80 ON yw_10.lid = yw_80.y01 WHERE yw_10.g01 = '1' AND yw_10.lid = '410388326021857280 ' GROUP BY yw_10.lid;
SELECT yw_10.lid,yw_10.y02,100 - SUM(yw_80.y03) AS score FROM yw_10 LEFT JOIN yw_80 ON yw_10.lid = yw_80.y01 WHERE yw_10.g01 = '1' GROUP BY yw_10.lid;

SELECT * FROM yw_10 WHERE y02 LIKE '%小%';
SELECT * FROM yw_10 WHERE y02 LIKE %小%;

SELECT * FROM yw_80 WHERE y01 = '410388326021857280';
-- 410388326021857280 

SELECT yw_10.lid,yw_10.y02,100 - COALESCE(SUM(yw_80.y03),0) AS score FROM yw_10 LEFT JOIN yw_80 ON yw_10.lid = yw_80.y01  WHERE  yw_10.g01='1' AND yw_80.y01 = '410388326021857280' AND yw_80.g01 = '1' GROUP BY yw_10.lid

SELECT yw_10.lid,yw_10.y02 FROM yw_10 LEFT JOIN yw_80 ON yw_10.lid = yw_80.y01  WHERE  yw_10.g01='1' GROUP BY yw_10.lid;
SELECT lid,y02 FROM yw_10 WHERE g01 = '1';
SELECT * FROM yw_80 WHERE g01 = '' AND y01 = '';

-- eea4a5a21502406c91379c6942630603	1b3ac8945659485ab5588c65d30133fb	61b10a35f5bb4382b8fa4109a486dad0	96c8892d941f4054945b2c8a8381c4e7
SELECT * FROM yw_74 WHERE y01 = 'eea4a5a21502406c91379c6942630603';
SELECT * FROM yw_74 WHERE y01 = '1b3ac8945659485ab5588c65d30133fb';
SELECT * FROM yw_74 WHERE y01 = '61b10a35f5bb4382b8fa4109a486dad0';

-- line row
SELECT b,d FROM ww GROUP BY b;

-- 2661735151863808	78e2866f7db94ba9b19b080d94aa9233
UPDATE yw_74 SET y02 = '789233' WHERE y02 = '78e2866f7db94ba9b19b080d94aa9233';
SELECT * FROM yw_74 WHERE y02 = '78e2866f7db94ba9b19b080d94aa9233';
SELECT yw_10.lid,yw_10.y02,100 - COALESCE(SUM(yw_80.y03),0) AS score FROM yw_10 LEFT JOIN yw_80 ON yw_10.lid = yw_80.y01  WHERE  yw_10.g01='1' GROUP BY yw_10.lid

SELECT SUM(y03),y01 FROM yw_80 WHERE y01 IN (SELECT y01 FROM yw_80 GROUP BY y01) AND g01 = '1' GROUP BY y01;
SELECT SUM(y03) FROM yw_80 WHERE y01 = '410388326021857280';
SELECT y01,COALESCE(SUM(y03),0) AS score FROM yw_80 WHERE y01 = '410388326021857280' AND g01 = '1';

--
SELECT * FROM yw_103 WHERE y03 IN (SELECT yw_10.lid id FROM yw_10 INNER JOIN yw_10a ON yw_10.lid = yw_10a.y09 WHERE yw_10.g01=1 AND yw_10a.y01='396667372305383424') AND y01 != '1';
SELECT yw_10.lid id FROM yw_10 INNER JOIN yw_10a ON yw_10.lid = yw_10a.y09 WHERE yw_10.g01=1 AND yw_10a.y01='396667372305383424';

SHOW TABLES;
SELECT * FROM yw_104 WHERE y02 = '4c013d9d29234a6eb48cad2f2e8f7523';

RENAME TABLE yw_104 TO yw_104a;
RENAME TABLE yw_105 TO yw_105a;
RENAME TABLE yw_106 TO yw_106a;
RENAME TABLE yw_112 TO yw_112a;
DESC yw_74;
DESC yw_105;
DELETE FROM yw_104 WHERE g01 = '1';
SHOW CREATE TABLE yw_10;

CREATE TABLE `yw_113` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(50) DEFAULT '',
  `y02` VARCHAR(50) DEFAULT '',
  `y03` TEXT,
  `g01` VARCHAR(20) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  `g05` VARCHAR(20) DEFAULT '',
  `g06` VARCHAR(50) DEFAULT '',
  `g07` VARCHAR(20) DEFAULT '',
  `g08` VARCHAR(20) DEFAULT '',
  `g09` VARCHAR(50) DEFAULT '',
  `g10` VARCHAR(20) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8

SHOW CREATE TABLE yw_10;
SELECT * FROM yw_10;
CREATE TABLE `yw_10` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(100) DEFAULT '',
  `y02` VARCHAR(200) DEFAULT '',
  `y03` VARCHAR(20) DEFAULT '',
  `y04` VARCHAR(50) DEFAULT '',
  `y05` VARCHAR(20) DEFAULT '',
  `y06` CHAR(1) DEFAULT '0',
  `y07` CHAR(2) DEFAULT '0',
  `y08` CHAR(2) DEFAULT '1',
  `y09` VARCHAR(20) DEFAULT '',
  `y10` VARCHAR(20) DEFAULT '',
  `y11` VARCHAR(20) DEFAULT '0',
  `y12` VARCHAR(20) DEFAULT '0',
  `y13` VARCHAR(20) DEFAULT '0',
  `y14` VARCHAR(20) DEFAULT '0',
  `y15` VARCHAR(20) DEFAULT '0',
  `y16` VARCHAR(20) DEFAULT '0',
  `y17` CHAR(2) DEFAULT '0',
  `y18` VARCHAR(20) DEFAULT '0',
  `y19` VARCHAR(20) DEFAULT '0',
  `y20` VARCHAR(20) DEFAULT '',
  `y21` VARCHAR(20) DEFAULT '',
  `y22` VARCHAR(20) DEFAULT '',
  `y23` CHAR(2) DEFAULT '0',
  `y24` CHAR(2) DEFAULT '0',
  `y25` CHAR(2) DEFAULT '0',
  `y26` CHAR(2) DEFAULT '0',
  `y27` CHAR(2) DEFAULT '0',
  `y28` CHAR(2) DEFAULT '0',
  `y29` CHAR(2) DEFAULT '0',
  `y30` CHAR(2) DEFAULT '0',
  `y31` CHAR(2) DEFAULT '0',
  `y32` INT(11) DEFAULT '0',
  `y33` INT(11) DEFAULT '0',
  `y34` CHAR(2) DEFAULT '0',
  `y35` TEXT,
  `y36` VARCHAR(20) DEFAULT '',
  `y37` VARCHAR(20) DEFAULT '',
  `y38` VARCHAR(20) DEFAULT '',
  `y39` VARCHAR(20) DEFAULT '',
  `y40` VARCHAR(200) DEFAULT '',
  `y41` VARCHAR(50) DEFAULT '',
  `y42` VARCHAR(100) DEFAULT '',
  `y43` VARCHAR(20) DEFAULT '0',
  `y44` VARCHAR(20) DEFAULT '',
  `y45` VARCHAR(20) DEFAULT '',
  `y46` CHAR(1) DEFAULT '0',
  `y47` VARCHAR(20) DEFAULT '',
  `y48` VARCHAR(20) DEFAULT '',
  `y49` VARCHAR(20) DEFAULT '',
  `y50` VARCHAR(20) DEFAULT '',
  `y51` VARCHAR(20) DEFAULT '',
  `y52` VARCHAR(20) DEFAULT '',
  `y53` VARCHAR(20) DEFAULT '',
  `y54` TEXT,
  `y55` VARCHAR(20) DEFAULT '',
  `y56` VARCHAR(20) DEFAULT '',
  `y57` VARCHAR(600) DEFAULT '',
  `y58` VARCHAR(20) DEFAULT '',
  `y59` VARCHAR(20) DEFAULT '',
  `y60` VARCHAR(20) DEFAULT '',
  `y61` VARCHAR(20) DEFAULT NULL,
  `y62` VARCHAR(20) DEFAULT NULL,
  `y63` VARCHAR(20) DEFAULT NULL,
  `y64` VARCHAR(50) DEFAULT NULL,
  `g01` CHAR(2) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  `g05` VARCHAR(20) DEFAULT '',
  `g06` VARCHAR(50) DEFAULT '',
  `g07` VARCHAR(20) DEFAULT '',
  `g08` VARCHAR(20) DEFAULT '',
  `g09` VARCHAR(50) DEFAULT '',
  `g10` VARCHAR(20) DEFAULT '',
  `g11` VARCHAR(20) DEFAULT '',
  `g12` VARCHAR(200) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8
-- -----------------------------------------------------------------
CREATE TABLE `yw_111d` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(20) DEFAULT '',
  `y02` VARCHAR(500) DEFAULT '',
  `y03` VARCHAR(500) DEFAULT '',
  `y04` VARCHAR(20) DEFAULT '',
  `y05` VARCHAR(500) DEFAULT '',
  `y06` TEXT,
  `g01` VARCHAR(20) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
-- -----------------------------------------------------------------
ALTER TABLE yw_112d
ADD COLUMN y07 VARCHAR(20) DEFAULT '' AFTER y06;


DROP TABLE yw_104b;

SELECT y01,y02,y03 FROM yw_104a;

SHOW CREATE TABLE yw_54a;
CREATE TABLE `yw_54a` (
  `oid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT NULL,
  `y01` VARCHAR(200) DEFAULT NULL,
  `y02` VARCHAR(500) DEFAULT NULL,
  `y03` VARCHAR(100) DEFAULT NULL,
  `y04` VARCHAR(20) DEFAULT NULL,
  `g01` CHAR(2) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT NULL,
  `g03` VARCHAR(50) DEFAULT NULL,
  `g04` VARCHAR(30) DEFAULT NULL,
  `g05` VARCHAR(20) DEFAULT NULL,
  `g06` VARCHAR(20) DEFAULT NULL,
  `g07` VARCHAR(20) DEFAULT NULL,
  `g08` VARCHAR(30) DEFAULT NULL,
  `g09` VARCHAR(20) DEFAULT NULL,
  `g10` VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8

UPDATE yw_127 SET y09='840.0',y10='517.0' WHERE lid='443426717424418816';
SELECT y02 FROM yw_10a WHERE y09 = '402417819301445632' AND y05 = '1' ORDER BY oid LIMIT 1;
SELECT * FROM yw_10 WHERE lid = '402417819301445632' AND y01 LIKE;

SELECT y02 FROM yw_10a WHERE y09 = '402550089882533888' AND y05 = '1' ORDER BY oid LIMIT 1
SELECT * FROM 

SHOW CREATE TABLE yw_112d;
-- c
-- -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS`yw_112c` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(20) DEFAULT '',
  `y02` VARCHAR(20) DEFAULT '',
  `y03` VARCHAR(500) DEFAULT '',
  `y04` VARCHAR(500) DEFAULT '',
  `g01` VARCHAR(20) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  `g05` VARCHAR(20) DEFAULT '',
  `g06` VARCHAR(50) DEFAULT '',
  `g07` VARCHAR(20) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
-- -----------------------------------------------------------------

-- d
-- -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS`yw_111d` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(20) DEFAULT '',
  `y02` VARCHAR(500) DEFAULT '',
  `y03` VARCHAR(500) DEFAULT '',
  `y04` VARCHAR(20) DEFAULT '',
  `y05` VARCHAR(500) DEFAULT '',
  `y06` TEXT,
  `y07` VARCHAR(20) DEFAULT '',
  `g01` VARCHAR(20) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
-- -----------------------------------------------------------------

SELECT * FROM yw_74 WHERE y02 IN('61b10a35f5bb4382b8fa4109a486dad0','9c016811cc8448f9ab6e3ee89136fc5b','38eb0bb414c6404dae4536784fac2588','7855896244ee42e898b1ce121bc3eb41');

SELECT COALESCE(SUM(yw_127a.y10),0) AS y10,COALESCE(SUM(yw_127a.y09),0) AS y09 FROM yw_127a INNER JOIN yw_127 ON yw_127.lid = yw_127a.y13 WHERE yw_127a.g01 = '1' AND yw_127a.y01='402414776291950592' AND yw_127.y07='2';




-- -----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS`yw_135` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(500) DEFAULT '',
  `y02` VARCHAR(500) DEFAULT '',
  `y03` VARCHAR(20) DEFAULT '',
  `y04` VARCHAR(500) DEFAULT '',
  `y05` VARCHAR(500) DEFAULT '',
  `y06` VARCHAR(50) DEFAULT '',
  `y07` VARCHAR(50) DEFAULT '',
  `y08` VARCHAR(20) DEFAULT '',
  `y09` VARCHAR(20) DEFAULT '',
  `y10` TEXT,
  `y11` TEXT,
  `y12` TEXT,
  `y13` TEXT,
  `y14` TEXT,
  `y15` VARCHAR(20) DEFAULT '',
  `y16` VARCHAR(20) DEFAULT '',
  `y17` TEXT,
  `y18` VARCHAR(20) DEFAULT '',
  `y19` VARCHAR(20) DEFAULT '',
  `g01` VARCHAR(20) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  `g05` VARCHAR(20) DEFAULT '',
  `g06` VARCHAR(50) DEFAULT '',
  `g07` VARCHAR(20) DEFAULT '',
  `g08` VARCHAR(20) DEFAULT '',
  `g09` VARCHAR(50) DEFAULT '',
  `g10` VARCHAR(20) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
-- -----------------------------------------------------------------

CREATE TABLE IF NOT EXISTS`yw_135a` (
  `oid` INT(11) NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT '',
  `y01` VARCHAR(500) DEFAULT '',
  `y02` VARCHAR(20) DEFAULT '',
  `y03` VARCHAR(20) DEFAULT '',
  `y04` CHAR(2) DEFAULT '',
  `y05` VARCHAR(500) DEFAULT '',
  `y06` VARCHAR(500) DEFAULT '',
  `g01` VARCHAR(20) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT '',
  `g03` VARCHAR(50) DEFAULT '',
  `g04` VARCHAR(20) DEFAULT '',
  `g05` VARCHAR(20) DEFAULT '',
  `g06` VARCHAR(50) DEFAULT '',
  `g07` VARCHAR(20) DEFAULT '',
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
-- -----------------------------------------------------------------

-- project address yw_10.y57
SELECT * FROM yw_135a WHERE y03 = '2695797973551104' AND y04 = '0' AND g01 = '1'
SELECT * FROM yw_135  WHERE  g01 = '1' AND y02 LIKE '%蛙%';
UPDATE yw_111a SET g01 = '1'

SELECT * FROM yw_111a WHERE  g01 = '1' AND  y02 = '0';

SHOW CREATE TABLE yw_16;
CREATE TABLE `yw_16` (
  `oid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `lid` VARCHAR(20) DEFAULT NULL,
  `y01` VARCHAR(50) DEFAULT NULL,
  `y02` VARCHAR(100) DEFAULT NULL,
  `y03` VARCHAR(20) DEFAULT NULL,
  `y04` VARCHAR(100) DEFAULT NULL,
  `y05` VARCHAR(50) DEFAULT NULL,
  `y06` VARCHAR(200) DEFAULT NULL,
  `y07` VARCHAR(50) DEFAULT NULL,
  `y08` VARCHAR(20) DEFAULT NULL,
  `y09` VARCHAR(20) DEFAULT NULL,
  `y10` VARCHAR(20) DEFAULT NULL,
  `y11` VARCHAR(20) DEFAULT NULL,
  `y12` VARCHAR(20) DEFAULT NULL,
  `g01` INT(11) DEFAULT '1',
  `g02` VARCHAR(20) DEFAULT NULL,
  `g03` VARCHAR(50) DEFAULT NULL,
  `g04` VARCHAR(20) DEFAULT NULL,
  `g05` VARCHAR(20) DEFAULT NULL,
  `g06` VARCHAR(50) DEFAULT NULL,
  `g07` VARCHAR(20) DEFAULT NULL,
  `g08` VARCHAR(20) DEFAULT NULL,
  `g09` VARCHAR(50) DEFAULT NULL,
  `g10` VARCHAR(20) DEFAULT NULL,
  `y13` VARCHAR(30) DEFAULT NULL,
  `y14` VARCHAR(30) DEFAULT NULL,
  `y15` VARCHAR(20) DEFAULT NULL,
  `y16` VARCHAR(20) DEFAULT NULL,
  `y17` VARCHAR(20) DEFAULT NULL,
  `y18` VARCHAR(20) DEFAULT NULL,
  `y19` CHAR(2) DEFAULT NULL,
  `y20` TEXT,
  `y21` VARCHAR(20) DEFAULT NULL,
  `y22` VARCHAR(500) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=INNODB AUTO_INCREMENT=214 DEFAULT CHARSET=utf8

ALTER TABLE yw_16 CHANGE y19 y19 CHAR(2) DEFAULT '0';
SELECT * FROM yw_16;
UPDATE yw_16 SET y19 = '0';