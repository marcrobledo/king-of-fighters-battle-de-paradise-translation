

const GRAPHIC_REPLACEMENTS=[
	{offset:0xb0218, width: 16, height: 23, comment:'Small font', file:'font_small'},
	{offset:0xb27d8, width: 64, height: 19, comment:'Big font', file:'font_big'},

	{offset:0x15284c, width: 14, height: 3, comment:'Logo (sprite)', file:'logo_sprites'},
	{offset:0x113eb9, width: 16, height: 5, comment:'Logo (layer 1)', file:'logo_layer1'},
	//{offset:0x0fd266, width: 20, height: 5, comment:'Logo (layer 2)', file:'logo'},

	{offset:0x1bed84, width: 18, height: 7, comment:'Main menu', file:'main_menu'},
	{offset:0x0ec532, width: 12, height: 3, comment:'Main menu - Options (selected)', file:'main_menu_main_game_selected'},
	{offset:0x0eca0e, width: 12, height: 3, comment:'Main menu - Options (selected)', file:'main_menu_user_mode_selected'},
	{offset:0x13c068, width: 12, height: 3, comment:'Main menu - Options (selected)', file:'main_menu_options_selected'},

	{offset:0x106e60, width: 9, height: 9, comment:'Start menu - Turns', file:'start_menu_turns'},
	{offset:0x10fa32, width: 9, height: 1, comment:'Start menu - Players'},
	{offset:0x0fc295, width: 7, height: 1, comment:'Start menu - Map difficulty (1)'},
	{offset:0x155210, width: 5, height: 1, comment:'Start menu - Map difficulty (2,3)'},
	{offset:0x15661c, width: 5, height: 1, comment:'Start menu - Map difficulty (4)'},

	{offset:0x0dfe80, width: 10, height: 2, comment:'Options - Header'},
	{offset:0x129b4b, width: 14, height: 2, comment:'Options - Message speed', file:'options_message_speed'},
	{offset:0x0db504, width: 14, height: 2, comment:'Options - Difficulty', file:'options_difficulty'},
	{offset:0x110c83, width: 14, height: 2, comment:'Options - DC Link', file:'options_dc_link'},
	{offset:0x10c29a, width: 15, height: 2, comment:'Options - Save data', file:'options_save_data'},
	{offset:0x0f2b3c, width: 12, height: 1, comment:'Options - Message speed (choose)', file:'options_message_speed_choose'},
	{offset:0x11e0f5, width: 14, height: 1, comment:'Options - Difficulty (choose)', file:'options_difficulty_choose'},

	{offset:0x108bad, width: 4, height: 1, comment:'Gameplay - HUD', file:'gameplay_hud'},
	{offset:0x148a07, width: 4, height: 1, comment:'Gameplay - Icon text - Dice', file:'gameplay_icon_text_dice'},
	{offset:0x14ae35, width: 6, height: 1, comment:'Gameplay - Icon text - Striker', file:'gameplay_icon_text_striker'},
	{offset:0x1170dd, width: 3, height: 1, comment:'Gameplay - Icon text - Card', file:'gameplay_icon_text_card'},
	{offset:0x148a45, width: 12, height: 3, comment:'Gameplay - Battle Minigame Header', file:'gameplay_battle_minigame_header'},

	{offset:0x12cfe7, width: 15, height: 2, comment:'User - Minigame title #01 (selected)', file:'user_minigame_title_selected_01'},
	{offset:0x0e8f91, width: 15, height: 2, comment:'User - Minigame title #02 (selected)', file:'user_minigame_title_selected_02'},
	{offset:0x0e0715, width: 15, height: 2, comment:'User - Minigame title #03 (selected)', file:'user_minigame_title_selected_03'},
	{offset:0x0e0e9d, width: 15, height: 2, comment:'User - Minigame title #04 (selected)', file:'user_minigame_title_selected_04'},
	{offset:0x100caf, width: 15, height: 2, comment:'User - Minigame title #05 (selected)', file:'user_minigame_title_selected_05'},
	{offset:0x1450f7, width: 15, height: 2, comment:'User - Minigame title #06 (selected)', file:'user_minigame_title_selected_06'},
	{offset:0x0f2011, width: 15, height: 2, comment:'User - Minigame title #07 (selected)', file:'user_minigame_title_selected_07'},
	{offset:0x0e14ac, width: 15, height: 2, comment:'User - Minigame title #08 (selected)', file:'user_minigame_title_selected_08'},
	{offset:0x0f6fa1, width: 15, height: 2, comment:'User - Minigame title #09 (selected)', file:'user_minigame_title_selected_09'},
	{offset:0x0e17e0, width: 15, height: 2, comment:'User - Minigame title #10 (selected)', file:'user_minigame_title_selected_10'},
	{offset:0x1084e5, width: 15, height: 2, comment:'User - Minigame title #11 (selected)', file:'user_minigame_title_selected_11'},
	{offset:0x0ed887, width: 15, height: 2, comment:'User - Minigame title #12 (selected)', file:'user_minigame_title_selected_12'},
	{offset:0x0e2ef0, width: 15, height: 2, comment:'User - Minigame title #13 (selected)', file:'user_minigame_title_selected_13'},
	{offset:0x149dac, width: 15, height: 2, comment:'User - Minigame title #14 (selected)', file:'user_minigame_title_selected_14'},
	{offset:0x0e20d7, width: 15, height: 2, comment:'User - Minigame title #15 (selected)', file:'user_minigame_title_selected_15'},
	//{offset:0x101bff, width: 15, height: 2, comment:'User - Minigame title #16 (selected)'}, //TANK?
	{offset:0x0de050, width: 15, height: 2, comment:'User - Minigame title #17 (selected)', file:'user_minigame_title_selected_17'},
	{offset:0x0e241e, width: 15, height: 2, comment:'User - Minigame title #18 (selected)', file:'user_minigame_title_selected_18'},
	{offset:0x1531c1, width: 15, height: 2, comment:'User - Minigame title #19 (selected)', file:'user_minigame_title_selected_19'},
	{offset:0x1358d1, width: 15, height: 2, comment:'User - Minigame title #20 (selected)', file:'user_minigame_title_selected_20'},
	{offset:0x0e27a4, width: 15, height: 2, comment:'User - Minigame title #21 (selected)', file:'user_minigame_title_selected_21'},
	{offset:0x0e2a0c, width: 15, height: 2, comment:'User - Minigame title #22 (selected)', file:'user_minigame_title_selected_22'},
	//{offset:0x12e685, width: 15, height: 2, comment:'User - Minigame title #23 (selected)'}, //YO·SA·KU

	{offset:0x1c94a6, width: 16, height: 10, comment:'Game rules Home', file:'game_rules_home'}, //to-do: implement a map quantizer into the tool

	{offset:0x1d4342, width: 15, height: 2, comment:'Game rules 1.1 - Legend', file:'game_rules_legend_page_first15'},
	{offset:0x1df35d, width: 15, height: 2, comment:'Game rules 1.2 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1e1f66, width: 15, height: 2, comment:'Game rules 1.3 - Legend', file:'game_rules_legend_page_last15'},
	{offset:0x1d709a, width: 14, height: 2, comment:'Game rules 2.1 - Legend', file:'game_rules_legend_page_first14'},
	{offset:0x1cccc2, width: 14, height: 2, comment:'Game rules 2.2 - Legend'/*, file:'game_rules_legend_page_last14'*/}, //glitches USER MODE screen?
	{offset:0x1acd25, width: 15, height: 2, comment:'Game rules 3.1 - Legend', file:'game_rules_legend_page_first15'},
	{offset:0x1b42fd, width: 15, height: 2, comment:'Game rules 3.2 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1bd6de, width: 15, height: 2, comment:'Game rules 3.3 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1c1829, width: 15, height: 2, comment:'Game rules 3.4 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1cf60f, width: 15, height: 2, comment:'Game rules 3.5 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1dc389, width: 14, height: 2, comment:'Game rules 3.6 - Legend', file:'game_rules_legend_page_last14'},
	{offset:0x1e53ae, width: 14, height: 2, comment:'Game rules 4.1 - Legend', file:'game_rules_legend_page_first14'},
	{offset:0x1d8d09, width: 15, height: 2, comment:'Game rules 4.2 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1baa03, width: 15, height: 2, comment:'Game rules 4.3 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1ea811, width: 14, height: 2, comment:'Game rules 4.4 - Legend', file:'game_rules_legend_page_last14'},
	{offset:0x1eb381, width: 14, height: 2, comment:'Game rules 5.1 - Legend', file:'game_rules_legend_page_first14'},
	{offset:0x1ec0e1, width: 15, height: 2, comment:'Game rules 5.2 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1ecbf1, width: 15, height: 2, comment:'Game rules 5.3 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1ed7c1, width: 15, height: 2, comment:'Game rules 5.4 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1ee391, width: 15, height: 2, comment:'Game rules 5.5 - Legend', file:'game_rules_legend_page_middle'},
	{offset:0x1ef121, width: 14, height: 2, comment:'Game rules 5.6 - Legend', file:'game_rules_legend_page_last14'},
];