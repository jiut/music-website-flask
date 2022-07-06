/*
 Navicat Premium Data Transfer

 Source Server         : pixic
 Source Server Type    : MySQL
 Source Server Version : 50738
 Source Host           : localhost:3306
 Source Schema         : musicdb

 Target Server Type    : MySQL
 Target Server Version : 50738
 File Encoding         : 65001

 Date: 05/07/2022 08:10:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `admin_id` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_pwd` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('admin', '123');
INSERT INTO `admin` VALUES ('root', '1212');

-- ----------------------------
-- Table structure for author
-- ----------------------------
DROP TABLE IF EXISTS `author`;
CREATE TABLE `author`  (
  `author_id` int(11) NOT NULL AUTO_INCREMENT,
  `author_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`author_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of author
-- ----------------------------
INSERT INTO `author` VALUES (1, 'all');
INSERT INTO `author` VALUES (2, '胡碧桥');
INSERT INTO `author` VALUES (3, '泥鳅Niko');
INSERT INTO `author` VALUES (4, '洛少爷');
INSERT INTO `author` VALUES (5, '吴青峰');
INSERT INTO `author` VALUES (6, 'AR');
INSERT INTO `author` VALUES (7, '留声玩具');
INSERT INTO `author` VALUES (8, '陈立农');
INSERT INTO `author` VALUES (10, '陈珂宇');
INSERT INTO `author` VALUES (11, '半阳');
INSERT INTO `author` VALUES (12, '展展与罗罗');
INSERT INTO `author` VALUES (13, '胡夏');
INSERT INTO `author` VALUES (14, '花姐');
INSERT INTO `author` VALUES (15, '邓紫棋');
INSERT INTO `author` VALUES (16, '黑龙');
INSERT INTO `author` VALUES (17, '张紫豪');
INSERT INTO `author` VALUES (18, '马良');
INSERT INTO `author` VALUES (19, 'Halsey');
INSERT INTO `author` VALUES (21, 'Post');
INSERT INTO `author` VALUES (22, 'Panic');
INSERT INTO `author` VALUES (23, 'Lil');
INSERT INTO `author` VALUES (24, 'Post Malone');
INSERT INTO `author` VALUES (25, 'Lady');
INSERT INTO `author` VALUES (26, 'Imagine');
INSERT INTO `author` VALUES (27, 'Travis');
INSERT INTO `author` VALUES (28, 'Lauren');
INSERT INTO `author` VALUES (29, '谢安琪');
INSERT INTO `author` VALUES (30, '谭咏麟');
INSERT INTO `author` VALUES (33, '司南');
INSERT INTO `author` VALUES (34, 'WayneWaste');
INSERT INTO `author` VALUES (35, 'test');
INSERT INTO `author` VALUES (36, 'a');
INSERT INTO `author` VALUES (37, 'asss');

-- ----------------------------
-- Table structure for board
-- ----------------------------
DROP TABLE IF EXISTS `board`;
CREATE TABLE `board`  (
  `board_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_id` int(11) NOT NULL,
  PRIMARY KEY (`board_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of board
-- ----------------------------
INSERT INTO `board` VALUES (1, 5);
INSERT INTO `board` VALUES (2, 6);
INSERT INTO `board` VALUES (3, 7);
INSERT INTO `board` VALUES (4, 2);
INSERT INTO `board` VALUES (5, 8);
INSERT INTO `board` VALUES (6, 34);
INSERT INTO `board` VALUES (7, 15);
INSERT INTO `board` VALUES (8, 19);
INSERT INTO `board` VALUES (9, 12);
INSERT INTO `board` VALUES (10, 24);

-- ----------------------------
-- Table structure for buy
-- ----------------------------
DROP TABLE IF EXISTS `buy`;
CREATE TABLE `buy`  (
  `buy_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `music_id` int(11) NOT NULL,
  PRIMARY KEY (`buy_id`) USING BTREE,
  INDEX `id`(`id`) USING BTREE,
  INDEX `music_id`(`music_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of buy
-- ----------------------------
INSERT INTO `buy` VALUES (4, 40, 15);
INSERT INTO `buy` VALUES (5, 42, 7);
INSERT INTO `buy` VALUES (6, 42, 2);
INSERT INTO `buy` VALUES (7, 44, 15);
INSERT INTO `buy` VALUES (8, 44, 16);
INSERT INTO `buy` VALUES (9, 42, 18);
INSERT INTO `buy` VALUES (10, 42, 33);
INSERT INTO `buy` VALUES (11, 42, 31);
INSERT INTO `buy` VALUES (12, 42, 24);
INSERT INTO `buy` VALUES (13, 46, 15);
INSERT INTO `buy` VALUES (14, 46, 5);
INSERT INTO `buy` VALUES (15, 49, 15);
INSERT INTO `buy` VALUES (16, 49, 2);

-- ----------------------------
-- Table structure for library
-- ----------------------------
DROP TABLE IF EXISTS `library`;
CREATE TABLE `library`  (
  `library_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) NOT NULL,
  `music_id` int(11) NOT NULL,
  PRIMARY KEY (`library_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of library
-- ----------------------------
INSERT INTO `library` VALUES (6, 40, 15);
INSERT INTO `library` VALUES (7, 40, 32);
INSERT INTO `library` VALUES (8, 40, 5);
INSERT INTO `library` VALUES (14, 42, 3);
INSERT INTO `library` VALUES (17, 44, 2);
INSERT INTO `library` VALUES (18, 44, 3);
INSERT INTO `library` VALUES (19, 44, 24);
INSERT INTO `library` VALUES (20, 44, 12);
INSERT INTO `library` VALUES (21, 44, 15);
INSERT INTO `library` VALUES (22, 44, 32);
INSERT INTO `library` VALUES (23, 42, 7);
INSERT INTO `library` VALUES (24, 42, 15);
INSERT INTO `library` VALUES (25, 42, 18);
INSERT INTO `library` VALUES (26, 42, 6);
INSERT INTO `library` VALUES (27, 45, 12);
INSERT INTO `library` VALUES (28, 45, 8);
INSERT INTO `library` VALUES (29, 46, 15);
INSERT INTO `library` VALUES (30, 42, 24);
INSERT INTO `library` VALUES (31, 44, 34);
INSERT INTO `library` VALUES (32, 48, 7);
INSERT INTO `library` VALUES (33, 49, 7);
INSERT INTO `library` VALUES (34, 49, 5);

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list`  (
  `list_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_id` int(11) NOT NULL,
  PRIMARY KEY (`list_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of list
-- ----------------------------

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music`  (
  `music_id` int(11) NOT NULL,
  `music_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `download` int(11) NOT NULL,
  `listen` int(11) NOT NULL,
  `style` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `free` int(11) NOT NULL,
  `address` varchar(2083) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `album` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`music_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES (101, 'POP', 'ChihofxxkinLit', 0, 0, 'Pop', 0, '533204535', 'POP');
INSERT INTO `music` VALUES (102, 'Pop', '*NSYNC', 0, 0, 'Pop', 0, '533204535', 'Celebrity');
INSERT INTO `music` VALUES (103, 'Pop', '脏手指 Oh! Dirty Fingers', 0, 0, 'Pop', 0, '533204535', '我怎么学的这么坏');
INSERT INTO `music` VALUES (104, 'POP/STARS', 'K/DA/Madison Beer/(G)I-DLE/Jaira Burns', 0, 0, 'Pop', 0, '533204535', 'POP/STARS');
INSERT INTO `music` VALUES (105, 'pop', 'ユアネス', 0, 0, 'Pop', 0, '533204535', 'Ctrl+Z');
INSERT INTO `music` VALUES (106, 'POP', 'UncleG/阿斯尔Asir', 0, 0, 'Pop', 0, '533204535', '大G大利');
INSERT INTO `music` VALUES (107, 'POP', 'REDFACE', 0, 0, 'Pop', 0, '533204535', 'POP');
INSERT INTO `music` VALUES (108, 'Fake Love', 'Drake', 0, 0, 'Pop', 0, '533204535', 'Fake Love');
INSERT INTO `music` VALUES (109, 'POP', 'Bangler', 0, 0, 'Pop', 0, '533204535', 'POP');
INSERT INTO `music` VALUES (110, 'Pop', 'Kenneth G/Reez', 0, 0, 'Pop', 0, '533204535', 'Pop');
INSERT INTO `music` VALUES (111, 'Venus Fly', 'Grimes/Janelle Monáe', 0, 0, 'Pop', 0, '533204535', 'Art Angels');
INSERT INTO `music` VALUES (112, 'Too Much', 'ZAYN/Timbaland', 0, 0, 'Pop', 0, '533204535', 'Too Much');
INSERT INTO `music` VALUES (113, 'Youth', 'Shawn Mendes/Khalid', 0, 0, 'Pop', 0, '533204535', 'Youth');
INSERT INTO `music` VALUES (114, 'Send It (feat. Rich Homie Quan)', 'Austin Mahone/Rich Homie Quan', 0, 0, 'Pop', 0, '533204535', 'Send It (feat. Rich Homie Quan)');
INSERT INTO `music` VALUES (115, 'Maybe', 'Russ', 0, 0, 'Pop', 0, '533204535', 'Maybe');
INSERT INTO `music` VALUES (116, 'What You Know Bout Love', 'Pop Smoke', 0, 0, 'Pop', 0, '533204535', 'Shoot For The Stars Aim For The Moon');
INSERT INTO `music` VALUES (117, 'We Are The Robots (feat. Temu)', 'Insan3Lik3/Temu', 0, 0, 'Pop', 0, '533204535', 'Monstercat 016 - Expedition');
INSERT INTO `music` VALUES (118, 'Rainy Saturday Coffee Break', '大橋純子/美乃家セントラル・ステイション', 0, 0, 'Pop', 0, '533204535', 'Pacific Breeze 2: Japanese City Pop, AOR and Boogie 1972–1986');
INSERT INTO `music` VALUES (119, 'Only U', 'KING', 0, 0, 'Pop', 0, '533204535', 'Only U');
INSERT INTO `music` VALUES (120, 'My Trap Card Remix', 'Poppin Mett', 0, 0, 'Pop', 0, '533204535', 'My trap card Remix');
INSERT INTO `music` VALUES (121, 'Die A Little Bit', 'Tinashe/Ms Banks', 0, 0, 'Pop', 0, '533204535', 'Songs For You');
INSERT INTO `music` VALUES (122, 'Cranes in the Sky', 'Solange', 0, 0, 'Pop', 0, '533204535', 'A Seat at the Table');
INSERT INTO `music` VALUES (123, 'The Smurf', 'Tyrone Brunson', 0, 0, 'Pop', 0, '533204535', 'Classic Electro Mastercuts Volume 1');
INSERT INTO `music` VALUES (124, 'Drinking Problem', 'Arizona Zervas/27CLUB', 0, 0, 'Pop', 0, '533204535', 'Drinking Problem');
INSERT INTO `music` VALUES (125, 'STAY', 'The Kid LAROI/Justin Bieber', 0, 0, 'Pop', 0, '533204535', 'STAY');
INSERT INTO `music` VALUES (126, 'I Got Love (Remix)', 'Nate Dogg', 0, 0, 'Pop', 0, '533204535', 'Hit the Road');
INSERT INTO `music` VALUES (127, 'How Do You Sleep?', 'Sam Smith', 0, 0, 'Pop', 0, '533204535', 'How Do You Sleep?');
INSERT INTO `music` VALUES (128, 'Peddle Bike', 'Mishaal', 0, 0, 'Pop', 0, '533204535', 'Peddle Bike');
INSERT INTO `music` VALUES (129, 'UFO', '99 God', 0, 0, 'Pop', 0, '533204535', 'UFO');
INSERT INTO `music` VALUES (130, 'This Funk Ain\'t No Phase', 'XL Middleton', 0, 0, 'Pop', 0, '533204535', 'Tap Water Runoff');
INSERT INTO `music` VALUES (131, 'Larmes de caramel', 'Elsa Kopf', 0, 0, 'Jazz', 0, '533204535', 'Acoustic Joys');
INSERT INTO `music` VALUES (132, 'Jazz', 'BonJ', 0, 0, 'Jazz', 0, '533204535', 'Jazz');
INSERT INTO `music` VALUES (133, 'La vie en rose', 'Louis Armstrong and His Orchestra/Sy Oliver & His Orchestra', 0, 0, 'Jazz', 0, '533204535', 'The Very Best Of Louis Armstrong');
INSERT INTO `music` VALUES (134, 'I WISH YOU LOVE', '小野リサ', 0, 0, 'Jazz', 0, '533204535', 'Ono Lisa Best 1997-2001');
INSERT INTO `music` VALUES (135, 'Like A Star', 'Corinne Bailey Rae', 0, 0, 'Jazz', 0, '533204535', 'Like A Star');
INSERT INTO `music` VALUES (136, 'Jardin D\'hiver', 'Keren Ann', 0, 0, 'Jazz', 0, '533204535', 'Putumayo Presents: Paris');
INSERT INTO `music` VALUES (137, 'Loving You', 'Marcela', 0, 0, 'Jazz', 0, '533204535', 'Best Audiophile Voices V');
INSERT INTO `music` VALUES (138, '50 Feet', 'SoMo', 0, 0, 'Jazz', 0, '533204535', '50 Feet');
INSERT INTO `music` VALUES (139, 'BURNITUP!', 'Janet Jackson/Missy Elliott', 0, 0, 'Jazz', 0, '533204535', 'BURNITUP!');
INSERT INTO `music` VALUES (140, 'Señorita', 'Shawn Mendes/Camila Cabello', 0, 0, 'Jazz', 0, '533204535', 'Señorita');
INSERT INTO `music` VALUES (141, 'DURO HARD', 'Black Eyed Peas/Becky G', 0, 0, 'Jazz', 0, '533204535', 'Translation');
INSERT INTO `music` VALUES (142, 'Plain Jane', 'Roberto Kan/İlkan Günüç', 0, 0, 'Jazz', 0, '533204535', 'Plain Jane');
INSERT INTO `music` VALUES (143, 'Juicy', 'Doja Cat/Tyga', 0, 0, 'Jazz', 0, '533204535', 'Juicy');
INSERT INTO `music` VALUES (144, '1941 (feat. Virian)', 'Klaypex', 0, 0, 'Jazz', 0, '533204535', 'Anything Goes');
INSERT INTO `music` VALUES (145, 'Don\'t Speak', 'Anna Maria Jopek', 0, 0, 'Jazz', 0, '533204535', 'Secret');
INSERT INTO `music` VALUES (146, 'Earth Run', 'Lee Ritenour/Abraham Laborier/Paulinho Da Costa', 0, 0, 'Jazz', 0, '533204535', 'Smooth Running (Jazz Club)');
INSERT INTO `music` VALUES (147, 'Tom Cat Blues', 'Jelly Roll Morton', 0, 0, 'Jazz', 0, '533204535', 'The Piano Rolls');
INSERT INTO `music` VALUES (148, 'family affair -M-Swift Remix-', 'paris match', 0, 0, 'Jazz', 0, '533204535', 'Our Favourite Pop');
INSERT INTO `music` VALUES (149, 'You Never Can Tell', 'Chuck Berry', 0, 0, 'Jazz', 0, '533204535', 'The Ultimate Collection [Universal]');
INSERT INTO `music` VALUES (150, 'Squib Cakes', 'Tower of Power', 0, 0, 'Jazz', 0, '533204535', 'Back To Oakland');
INSERT INTO `music` VALUES (151, 'That Man', 'Caro Emerald', 0, 0, 'Jazz', 0, '533204535', 'Deleted Scenes From The Cutting Room Floor');
INSERT INTO `music` VALUES (152, 'Do Your Thing', 'Stefanie Heinzmann', 0, 0, 'Jazz', 0, '533204535', 'Masterplan');
INSERT INTO `music` VALUES (153, 'In The Still Of The Night', 'Oscar Peterson', 0, 0, 'Jazz', 0, '533204535', 'Plays The Cole Porter Songbook');
INSERT INTO `music` VALUES (154, 'Attention (Roman Müller Edit)', 'Roman Müller/Charlie Puth', 0, 0, 'Jazz', 0, '533204535', 'Attention (Roman Müller Edit)');
INSERT INTO `music` VALUES (155, 'Love Till The End Of Time', 'Paulinho Da Costa', 0, 0, 'Jazz', 0, '533204535', '12\" Jazz Funk Classics');
INSERT INTO `music` VALUES (156, 'Creep', 'Karen Souza', 0, 0, 'Jazz', 0, '533204535', 'Vintage Café - Lounge & Jazz Blends');
INSERT INTO `music` VALUES (157, 'You\'d Be So Nice To Come Home To', 'Cecil Taylor', 0, 0, 'Jazz', 0, '533204535', 'Jazz Advance');
INSERT INTO `music` VALUES (158, 'So Nice', 'Jim Tomlinson/Stacey Kent', 0, 0, 'Jazz', 0, '533204535', 'Jazz Cafe 2');
INSERT INTO `music` VALUES (159, 'But Beautiful', 'Eddie Higgins Trio', 0, 0, 'Jazz', 0, '533204535', 'Secret Love');
INSERT INTO `music` VALUES (160, 'Dibidy Dop', 'Club des Belugas', 0, 0, 'Jazz', 0, '533204535', 'White Mink: Black Cotton');
INSERT INTO `music` VALUES (161, 'R.', '李子豪(HtFR)/大喜', 0, 0, 'R&B', 0, '533204535', 'R.');
INSERT INTO `music` VALUES (162, 'R.', 'Dee', 0, 0, 'R&B', 0, '533204535', 'R.');
INSERT INTO `music` VALUES (163, '就忘了吧', '3rq', 0, 0, 'R&B', 0, '533204535', '就忘了吧');
INSERT INTO `music` VALUES (164, 'Born a Stranger', 'Kan R. Gao', 0, 0, 'R&B', 0, '533204535', 'To the Moon');
INSERT INTO `music` VALUES (165, 'Can\'t Get U Off Ma Mine (Edit)', 'Ro Ryon', 0, 0, 'R&B', 0, '533204535', 'Can\'t Get U Off Ma Mine (Edit)');
INSERT INTO `music` VALUES (166, 'Oh Yeah (Prod. Noria)', 'K.O.R', 0, 0, 'R&B', 0, '533204535', 'Oh Yeah');
INSERT INTO `music` VALUES (167, '樱花树下', '潇潇', 0, 0, 'R&B', 0, '533204535', '至臻短曲');
INSERT INTO `music` VALUES (168, 'Counting star-BE\'O纯享版', 'R', 0, 0, 'R&B', 0, '533204535', 'Counting star-BE\'O');
INSERT INTO `music` VALUES (169, 'The Minimal Beat', 'Strong R.', 0, 0, 'R&B', 0, '533204535', 'The Minimal Beat');
INSERT INTO `music` VALUES (170, 'I Believe I Can Fly', 'R. Kelly', 0, 0, 'R&B', 0, '533204535', 'R.');
INSERT INTO `music` VALUES (171, 'ΛSHES', 'R!N/Gemie', 0, 0, 'R&B', 0, '533204535', '「プロメア」オリジナルサウンドトラック');
INSERT INTO `music` VALUES (172, 'gravityWall', 'Tielle/R!N/Gemie/SawanoHiroyuki[nZk]', 0, 0, 'R&B', 0, '533204535', 'gravityWall/sh0ut');
INSERT INTO `music` VALUES (173, 'Stuck In Love', 'Ra Costelloe', 0, 0, 'R&B', 0, '533204535', 'Stuck In Love');
INSERT INTO `music` VALUES (174, 'IONIQ', 'RM/Jin/SUGA/j-hope/Jimin/V/Jung Kook', 0, 0, 'R&B', 0, '533204535', 'IONIQ-I\'m on it');
INSERT INTO `music` VALUES (175, 'Vigilante', 'mpi/R!N/Gemie', 0, 0, 'R&B', 0, '533204535', '機動戦士ガンダムNT オリジナル・サウンドトラック');
INSERT INTO `music` VALUES (176, 'Smokin Out The Window', 'R', 0, 0, 'R&B', 0, '533204535', 'Smokin Out The Window');
INSERT INTO `music` VALUES (177, 'R', 'Hi-Fi CAMP', 0, 0, 'R&B', 0, '533204535', '2nd BEST');
INSERT INTO `music` VALUES (178, '天涯浪子', 'Music--r', 0, 0, 'R&B', 0, '533204535', '天涯浪子');
INSERT INTO `music` VALUES (179, 'Λsʜᴇs<MODv>', 'R!N/Gemie', 0, 0, 'R&B', 0, '533204535', '「プロメア オリジナルサウンドトラック」リミックス&リアレンジCD');
INSERT INTO `music` VALUES (180, 'sh0ut', 'Tielle/R!N/Gemie/SawanoHiroyuki[nZk]', 0, 0, 'R&B', 0, '533204535', 'gravityWall/sh0ut');
INSERT INTO `music` VALUES (181, 'Yalwurmayman', 'Bilal Enwer', 0, 0, 'R&B', 0, '533204535', 'Yalwurmayman');
INSERT INTO `music` VALUES (182, 'Honesty', '大喜', 0, 0, 'R&B', 0, '533204535', 'Honesty(cover)');
INSERT INTO `music` VALUES (183, 'กะเทยไม่เคยนอกใจ', 'Vid Hiper R siam', 0, 0, 'R&B', 0, '533204535', 'กะเทยไม่เคยนอกใจ');
INSERT INTO `music` VALUES (184, '金玉良缘前奏(0.8X)', 'Music--r', 0, 0, 'R&B', 0, '533204535', 'BGM');
INSERT INTO `music` VALUES (185, '屋顶着火', 'R', 0, 0, 'R&B', 0, '533204535', '伍');
INSERT INTO `music` VALUES (186, 'Onetwostep', 'B R L L N T', 0, 0, 'R&B', 0, '533204535', 'Onetwostep');
INSERT INTO `music` VALUES (187, 'Ghost (Joe Stone Remix)', 'Au/Ra/Alan Walker/Joe Stone', 0, 0, 'R&B', 0, '533204535', 'Ghost (Remixes)');
INSERT INTO `music` VALUES (188, '幼女幻奏', 'Sing, R. Sing!', 0, 0, 'R&B', 0, '533204535', 'らんしゃましゃんしゃん♪');
INSERT INTO `music` VALUES (189, '矛盾体', 'Tiya Manson/M R U O/RED8红八', 0, 0, 'R&B', 0, '533204535', '矛盾体');
INSERT INTO `music` VALUES (190, '船票（吉他片段）', 'Music--r', 0, 0, 'R&B', 0, '533204535', '治愈片段合集');
INSERT INTO `music` VALUES (191, 'Classical', 'Franc Blanco', 0, 0, 'classical', 0, '533204535', 'Classical');
INSERT INTO `music` VALUES (192, '小星星变奏曲', 'Wolfgang Amadeus Mozart', 0, 0, 'classical', 0, '533204535', '史上最优美钢琴小品精华');
INSERT INTO `music` VALUES (193, '肖邦：A小调圆舞曲2', '中国国家交响乐团', 0, 0, 'classical', 0, '533204535', '2008-2011 演奏实况合集');
INSERT INTO `music` VALUES (194, 'Romance \"O pourquoi donc\" in E Minor, S. 169', '郎朗', 0, 0, 'classical', 0, '533204535', 'Liszt - My Piano Hero');
INSERT INTO `music` VALUES (195, 'Consolation No. 3 in D-Flat Major, S. 172', '郎朗', 0, 0, 'classical', 0, '533204535', 'Liszt - My Piano Hero');
INSERT INTO `music` VALUES (196, '单簧管波尔卡', '普罗修斯卡', 0, 0, 'classical', 0, '533204535', '最新热歌慢摇91');
INSERT INTO `music` VALUES (197, '贝多芬:钢琴三重奏《大公》第一乐章《海边的卡夫卡》', 'Various Artists', 0, 0, 'classical', 0, '533204535', '村上春树的音乐异想世界');
INSERT INTO `music` VALUES (198, 'CLASSICAL', 'DJ Mad Bunny', 0, 0, 'classical', 0, '533204535', 'CLASSICAL');
INSERT INTO `music` VALUES (199, 'CLASSICAL', 'ICUKK', 0, 0, 'classical', 0, '533204535', 'ICUKK BEAT');
INSERT INTO `music` VALUES (200, '晨曲', 'Edvard Grieg', 0, 0, 'classical', 0, '533204535', '世界著名交响乐团演奏的古典音乐系列之一 世界著名抒情音乐小品');
INSERT INTO `music` VALUES (201, 'Classical', 'Relaxing Piano Music Consort/Piano: Classical Relaxation', 0, 0, 'classical', 0, '533204535', 'Sleep Classical Music: Piano Relaxation Frequency, Deep Sleep, Spa Music Piano');
INSERT INTO `music` VALUES (202, 'Symphony No.9 in E minor, Op.95 \"From the New World\": IV.Allegro con fuoco', 'Herbert von Karajan/Berliner Philharmoniker', 0, 0, 'classical', 0, '533204535', 'Karajan - Complete Recordings on Deutsche Grammophon (Vol. 2.5 1959-1965)');
INSERT INTO `music` VALUES (203, 'Variations on a theme from Cherubini\'s Faniska in B-Flat Major', 'Inga Fiolia', 0, 0, 'classical', 0, '533204535', 'GLINKA, M.I.: Piano Works (Complete), Vol. 1 - Variations (Fiolia)');
INSERT INTO `music` VALUES (204, 'Brandenburg Concerto No. 4 in G Major, BWV 1049:I. Allegro', 'Johann Sebastian Bach', 0, 0, 'classical', 0, '533204535', 'Hannibal Soundtrack (Music Inspired by the TV Series)');
INSERT INTO `music` VALUES (205, '伏尔塔瓦河', '群星', 0, 0, 'classical', 0, '533204535', '天鹅湖 [世界古典音乐经典曲]');
INSERT INTO `music` VALUES (206, 'Etude No. 3 In E \"Tristesse\"', '郎朗', 0, 0, 'classical', 0, '533204535', 'Chopin: Piano Concerto No. 2 & Piano Sonata No. 3');
INSERT INTO `music` VALUES (207, 'Trois études de concert in D-Flat Major, S. 144/ 3:Un sospiro', '郎朗', 0, 0, 'classical', 0, '533204535', 'Liszt - My Piano Hero');
INSERT INTO `music` VALUES (208, '天鹅', '刘蔓', 0, 0, 'classical', 0, '533204535', '大提琴');
INSERT INTO `music` VALUES (209, '克莱斯勒[爱的忧伤]', '群星', 0, 0, 'classical', 0, '533204535', '小提琴教学通用钢琴伴奏VOL4');
INSERT INTO `music` VALUES (210, 'Classical', 'Busy Boys', 0, 0, 'classical', 0, '533204535', 'The Best of B-Boy Records');
INSERT INTO `music` VALUES (211, '贝多芬第8号钢琴奏鸣曲悲伤的第三乐章', 'Various Artists', 0, 0, 'classical', 0, '533204535', '最新热歌慢摇12');
INSERT INTO `music` VALUES (212, 'BWV 1050 in D major', 'Josef Suk/Suk Chamber Orchestra', 0, 0, 'classical', 0, '533204535', 'The Baroque Collection');
INSERT INTO `music` VALUES (213, 'Rhapsody On A Theme By Paganini, Op.43:Variation 18 (Live At Mikkeli, Martti Talvela Hall / 2004)', '郎朗', 0, 0, 'classical', 0, '533204535', 'The Romance of Rachmaninov');
INSERT INTO `music` VALUES (214, 'classical', '李木染', 0, 0, 'classical', 0, '533204535', 'CLASSICAL');
INSERT INTO `music` VALUES (215, 'Impromptu, Op. 90, D. 899: No. 3 in G Flat Major', 'Franz Schubert/Franz Vorraber', 0, 0, 'classical', 0, '533204535', 'Schubert: Four Impromptus, Op. 90, D. 899');
INSERT INTO `music` VALUES (216, '小夜曲(舒伯特)', '群星', 0, 0, 'classical', 0, '533204535', '名曲胜名医（神奇音乐疗法）');
INSERT INTO `music` VALUES (218, '李斯特第二号匈牙利狂想曲', 'Maksim Mrvica', 0, 0, 'classical', 0, '533204535', '最新热歌慢摇111');
INSERT INTO `music` VALUES (219, '肖邦：C小调夜曲（遗作）, 未编号', '土星皇家交响乐团/Frédéric François Chopin', 0, 0, 'classical', 0, '533204535', '肖邦：《夜曲》全集');
INSERT INTO `music` VALUES (220, 'Etude,Op.25 No.11', '李云迪', 0, 0, 'classical', 0, '533204535', 'Portrait');
INSERT INTO `music` VALUES (221, 'Folk', 'AIKON', 0, 0, 'Folk', 0, '533204535', 'Four to the Floor 21');
INSERT INTO `music` VALUES (222, 'さよならの夏', '森山良子', 0, 0, 'Folk', 0, '533204535', '森山良子TWIN BEST');
INSERT INTO `music` VALUES (223, 'Do You Believe in Magic?', 'The Lovin\' Spoonful', 0, 0, 'Folk', 0, '533204535', 'The Lovin\' Spoonful - Greatest Hits');
INSERT INTO `music` VALUES (224, 'Milan', 'High Highs', 0, 0, 'Folk', 0, '533204535', 'Open Season');
INSERT INTO `music` VALUES (225, 'El Condor Pasa ( If I Could )', 'Andy William', 0, 0, 'Folk', 0, '533204535', 'Let\'s Folk');
INSERT INTO `music` VALUES (226, 'なごり雪', 'イルカ', 0, 0, 'Folk', 0, '533204535', 'IRUKA ALL THE BEST');
INSERT INTO `music` VALUES (227, 'Window Seat', 'Your Friend, Peter Giles', 0, 0, 'Folk', 0, '533204535', 'The Traveler EP');
INSERT INTO `music` VALUES (228, 'Andalucia', 'Andrew Bird', 0, 0, 'Folk', 0, '533204535', 'HARK!');
INSERT INTO `music` VALUES (229, '夜色', '玉置浩二', 0, 0, 'Folk', 0, '533204535', '惠威试音碟人声');
INSERT INTO `music` VALUES (230, 'Bottle of Pills', 'Jamie Scott', 0, 0, 'Folk', 0, '533204535', 'How Still the River');
INSERT INTO `music` VALUES (231, 'Folk', 'Terry Who', 0, 0, 'Folk', 0, '533204535', 'Finding Lola Best 22');
INSERT INTO `music` VALUES (232, 'Been Down That Road', 'Ruben Theory', 0, 0, 'Folk', 0, '533204535', 'City Boy');
INSERT INTO `music` VALUES (233, '潮骚', '五輪真弓', 0, 0, 'Folk', 0, '533204535', '五轮真弓');
INSERT INTO `music` VALUES (234, '三線の花', 'BEGIN', 0, 0, 'Folk', 0, '533204535', '三線の花');
INSERT INTO `music` VALUES (235, '神田川', '辉夜姬', 0, 0, 'Folk', 0, '533204535', '全曲集');
INSERT INTO `music` VALUES (236, 'Your Firefly (Georgia Power and Toyota Advert)', 'Ben Cocks', 0, 0, 'Folk', 0, '533204535', '...As Heard In');
INSERT INTO `music` VALUES (237, '一叶舟', '五輪真弓', 0, 0, 'Folk', 0, '533204535', '五轮真弓');
INSERT INTO `music` VALUES (238, '哀しみのバラード', '根田成一', 0, 0, 'Folk', 0, '533204535', '哀しみのバラード');
INSERT INTO `music` VALUES (239, 'Nantes', 'Beirut', 0, 0, 'Folk', 0, '533204535', 'The Flying Club Cup');
INSERT INTO `music` VALUES (240, '残り火', '五輪真弓', 0, 0, 'Folk', 0, '533204535', '五轮真弓');
INSERT INTO `music` VALUES (241, 'リバィバル', '五輪真弓', 0, 0, 'Folk', 0, '533204535', '五轮真弓');
INSERT INTO `music` VALUES (242, '风来坊', 'ふきのとう', 0, 0, 'Folk', 0, '533204535', '2000 BEST ふきのとう');
INSERT INTO `music` VALUES (243, '恋人よ', '五輪真弓', 0, 0, 'Folk', 0, '533204535', '五轮真弓');
INSERT INTO `music` VALUES (244, 'Tempest', 'Bob Dylan', 0, 0, 'Folk', 0, '533204535', 'Tempest');
INSERT INTO `music` VALUES (245, 'Go Solo', 'Tom Rosenthal', 0, 0, 'Folk', 0, '533204535', 'The Pleasant Trees');
INSERT INTO `music` VALUES (246, 'Ghost Towns', 'Radical Face', 0, 0, 'Folk', 0, '533204535', 'The Family Tree: The Roots');
INSERT INTO `music` VALUES (247, 'Dust In The Wind', 'Kansas', 0, 0, 'Folk', 0, '533204535', 'Let\'s Folk');
INSERT INTO `music` VALUES (248, 'いつも何度でも', '宗次郎', 0, 0, 'Folk', 0, '533204535', 'Prime Selection');
INSERT INTO `music` VALUES (249, 'Windflowers', 'Seals & Crofts', 0, 0, 'Folk', 0, '533204535', 'Let\'s Folk');
INSERT INTO `music` VALUES (250, 'Heart of Gold', 'Neil Young', 0, 0, 'Folk', 0, '533204535', 'Heart of Gold 7\" (Released for Record Store Day 2010)');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pwd` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `vclass` int(11) NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `end` datetime NOT NULL,
  `wallet` float NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE,
  UNIQUE INDEX `phone`(`phone`) USING BTREE,
  INDEX `ix_user_end`(`end`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (40, 'SixSense', 'pbkdf2:sha256:50000$FbjkA6hU$f1a64db57b47b755fa1cda20cec27f8c7c31ed23193843d7aa101a44f2f1a554', 'zhangximeng1212@foxmail.com', 1, '13051188398', '2019-02-14 21:18:35', 15);
INSERT INTO `user` VALUES (42, 'test', 'pbkdf2:sha256:50000$ZNlxSeAR$5c481fb0cf81aeb9ee79e9cba65c2d6683e3772ff21539589cf5b5d35456edfe', '16070641@st.nuc.edu.cn', 0, '18406587185', '2019-01-15 21:30:23', 42);
INSERT INTO `user` VALUES (43, '注销测试', 'pbkdf2:sha256:50000$Qu76Se9T$b074c66e152f86080126d06dcfb051d927944fda3c3658e518b6c01719f93084', '12313123@126.com', -1, '13231111111', '2019-01-16 08:24:48', 0);
INSERT INTO `user` VALUES (44, 'vip', 'pbkdf2:sha256:50000$fVveSdQm$0cbe02f49c33e0fc360f4e9b38867a9afd87da842ed8fa7ab6d1d080bc282d91', '12313@126.com', 1, '13231111000', '2019-02-16 21:39:25', 1);
INSERT INTO `user` VALUES (45, 'sql_p', 'pbkdf2:sha256:50000$ROlLCt6g$be0b7b7e1388dad3933b8ecf0ed8cf468136a662e5767d27c479653c361c99b9', '1607064@st.nuc.edu.cn', 0, '13051188399', '2019-01-18 09:46:32', 0);
INSERT INTO `user` VALUES (46, 'sql', 'pbkdf2:sha256:50000$j7DV8B8J$606a5243d5aa06e8ff72ee3df57cbef729c3ac0b2d1c8a5e7b5592bee8f8c5af', 'brgc1232123@foxmail.com', 1, '13051188311', '2019-02-17 15:01:52', 31);
INSERT INTO `user` VALUES (47, '888', 'pbkdf2:sha256:50000$cVVuBWw6$d1139f261d7e6ad23e13ad3b1174463fa1ad5f62e0118599f2eb6ec2aa259078', '123@163。com', 0, '15002175898', '2019-01-18 15:00:40', 0);
INSERT INTO `user` VALUES (49, 'jiut', 'pbkdf2:sha256:150000$EewUBjiT$49af7a77e3c15aa16952a991f0e39b67cf498f740dbde10dcdd1ed43ec2184d2', '1151386302@qq.com', 1, '13235485239', '2022-08-01 11:06:34', 100000000);

SET FOREIGN_KEY_CHECKS = 1;
