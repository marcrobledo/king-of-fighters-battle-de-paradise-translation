const PATCHES=[
	{offset:0x8f62, name:'Main menu - CONTINUE tiles starting index', data:[0x20]}, // originally 0x0a, 0x20 seems to be a safe index at Pattern Table (leftover tiles from SNK logo intro)
	{offset:0x8f62 + 2, name:'Main menu - CONTINUE string length', data:[0x06 + 2]},

	{offset:0x014034, name:'Create character - Prepare YES word', data:[
		/* we add two more columns to write the new YES word, which is longer than the japanese one */
		0xba, 0x34, 0x02, 0x03 + 2, 0x01 //ld (XDE+0x34), 0x0103
	]},
	{offset:0x014066, name:'Create character - Prepare NO word', data:[
		/* since YES is longer no, NO word must be moved and written to the following tiles in VRAM*/
		0xba, 0x32, 0x02, 0xc4 + 8, 0x00 //ld (XDE+0x32), 0x00c4
	]},

	{offset:0x019d5b + 2, name:'Options - Save prompt - YES string length', data:[0x02 + 1]},
	{offset:0x019d6d, name:'Options - Save prompt - NO starting index', data:[0xc4 + 1]},

	{offset:0x0c7dd8, name:'Options - Message speed prompt', data:[ /* 20 * 5 * 2 bytes */
		0x00, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x00, 0x88,
		0x02, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x02, 0x88,
		0x02, 0x08, 0x03, 0x08, 0x03, 0x08, 0x04, 0x08, 0x05, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x06, 0x08, 0x07, 0x08, 0x08, 0x08, 0x09, 0x08, 0x03, 0x08, 0x0a, 0x08, 0x0b, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x02, 0x88,
		0x02, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x02, 0x88,
		0x00, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x00, 0xc8
	]},
	{offset:0x0c7d0c, name:'Options - Difficulty prompt', data:[ /* 20 * 5 * 2 bytes */
		0x00, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x01, 0x08, 0x00, 0x88,
		0x02, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x02, 0x88,
		0x02, 0x08, 0x03, 0x08, 0x03, 0x08, 0x04, 0x08, 0x05, 0x08, 0x06, 0x08, 0x03, 0x08, 0x03, 0x08, 0x00, 0x08, 0x07, 0x08, 0x08, 0x08, 0x09, 0x08, 0x0a, 0x08, 0x03, 0x08, 0x0b, 0x08, 0x0c, 0x08, 0x0d, 0x08, 0x03, 0x08, 0x03, 0x08, 0x02, 0x88,
		0x02, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x03, 0x08, 0x02, 0x88,
		0x00, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x01, 0x48, 0x00, 0xc8
	]},
	


	/* STATIC SCREENS */
	{offset:0x18a2ec, name:'Static screen - Main Menu', data:[ /* 20 * 19 * 2 bytes, to-do: implement a map quantizer into the tool */
		0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x02, 0x00, 0x03, 0x00, 0x04, 0x00, 0x05, 0x00, 0x06, 0x00, 0x07, 0x00, 0x08, 0x00, 0x09, 0x00, 0x0a, 0x00, 0x0b, 0x00, 0x0c, 0x00, 0x0d, 0x00, 0x0e, 0x00, 0x0f, 0x00, 0x10, 0x00, 0x01, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x11, 0x00, 0x13, 0x00, 0x14, 0x00, 0x15, 0x00, 0x16, 0x00, 0x17, 0x00, 0x18, 0x00, 0x19, 0x00, 0x1a, 0x00, 0x1b, 0x00, 0x1c, 0x00, 0x1d, 0x00, 0x1e, 0x00, 0x11, 0x80, 0x11, 0x00, 0x12, 0x00, 0x1f, 0x00, 0x12, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x21, 0x00, 0x22, 0x00, 0x23, 0x00, 0x24, 0x00, 0x25, 0x00, 0x26, 0x00, 0x27, 0x00, 0x28, 0x00, 0x29, 0x00, 0x2a, 0x00, 0x2b, 0x00, 0x2c, 0x00, 0x2d, 0x00, 0x2e, 0x00, 0x2f, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x30, 0x00, 0x31, 0x00, 0x32, 0x00, 0x33, 0x00, 0x11, 0x00, 0x12, 0x00, 0x11, 0x00, 0x12, 0x00, 0x11, 0x00, 0x12, 0x00, 0x11, 0x00, 0x12, 0x00, 0x34, 0x00, 0x12, 0x00, 0x11, 0x00, 0x11, 0x00, 0x11, 0x00, 0x35, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x36, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x36, 0x84, 0x38, 0x00, 0x39, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3c, 0x04, 0x3d, 0x04, 0x3e, 0x04, 0x3f, 0x04, 0x40, 0x04, 0x41, 0x04, 0x42, 0x04, 0x43, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x11, 0x00, 0x12, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x44, 0x04, 0x45, 0x04, 0x46, 0x04, 0x47, 0x04, 0x48, 0x04, 0x49, 0x04, 0x4a, 0x04, 0x4b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x00, 0x00, 0x01, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x4c, 0x04, 0x4d, 0x04, 0x4d, 0x04, 0x4e, 0x04, 0x4f, 0x04, 0x4d, 0x04, 0x50, 0x04, 0x51, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x11, 0x00, 0x13, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x52, 0x04, 0x53, 0x04, 0x54, 0x04, 0x55, 0x04, 0x56, 0x04, 0x41, 0x84, 0x57, 0x04, 0x58, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x00, 0x00, 0x20, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x59, 0x04, 0x5a, 0x04, 0x5b, 0x04, 0x5c, 0x04, 0x5d, 0x04, 0x5e, 0x04, 0x5f, 0x04, 0x60, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x30, 0x00, 0x31, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x51, 0x84, 0x4d, 0x04, 0x4d, 0x04, 0x51, 0x04, 0x61, 0x04, 0x4d, 0x04, 0x4d, 0x04, 0x4f, 0x84, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x00, 0x00, 0x01, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x62, 0x04, 0x57, 0x04, 0x63, 0x04, 0x41, 0x84, 0x64, 0x04, 0x65, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x66, 0x00, 0x67, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x59, 0x04, 0x68, 0x04, 0x69, 0x04, 0x5e, 0x04, 0x6a, 0x04, 0x6b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x00, 0x00, 0x01, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x51, 0x84, 0x6c, 0x04, 0x61, 0x04, 0x4d, 0x04, 0x4d, 0x04, 0x51, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x11, 0x00, 0x12, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x36, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x36, 0xc4, 0x00, 0x00, 0x01, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x30, 0x00, 0x31, 0x00, 0x32, 0x00, 0x33, 0x00, 0x36, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x37, 0x04, 0x36, 0x84, 0x11, 0x00, 0x12, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x00, 0x6d, 0x00, 0x01, 0x00, 0x3a, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x00, 0x00, 0x01, 0x00,
		0x11, 0x00, 0x12, 0x00, 0x66, 0x00, 0x6e, 0x00, 0x14, 0x00, 0x6f, 0x00, 0x3a, 0x04, 0x70, 0x04, 0x71, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3b, 0x04, 0x3a, 0x84, 0x11, 0x00, 0x12, 0x00,
		0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x72, 0x00, 0x36, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x37, 0x44, 0x36, 0xc4, 0x00, 0x00, 0x01, 0x00
	]},
	{offset:0x193c64, name:'Static screen - Game Rules', data:[ /* 20 * 19 * 2 bytes, to-do: implement a map quantizer into the tool */
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x02, 0x00, 0x03, 0x00, 0x04, 0x00, 0x05, 0x00, 0x06, 0x00, 0x07, 0x00, 0x08, 0x00, 0x09, 0x00, 0x0a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0b, 0x00, 0x0c, 0x00, 0x0d, 0x00, 0x0e, 0x00, 0x0f, 0x00, 0x10, 0x00, 0x11, 0x00, 0x12, 0x00, 0x13, 0x00, 0x14, 0x00, 0x15, 0x00, 0x0b, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
		0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02, 0x16, 0x02,
		0x17, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x18, 0x02, 0x17, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x1a, 0x00, 0x1b, 0x00, 0x1c, 0x00, 0x1d, 0x00, 0x1e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x1f, 0x00, 0x20, 0x00, 0x21, 0x00, 0x1d, 0x40, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x23, 0x00, 0x24, 0x00, 0x25, 0x00, 0x26, 0x00, 0x27, 0x00, 0x28, 0x00, 0x29, 0x00, 0x2a, 0x00, 0x2b, 0x00, 0x2c, 0x00, 0x2d, 0x00, 0x2e, 0x00, 0x2f, 0x00, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x31, 0x00, 0x32, 0x00, 0x33, 0x00, 0x33, 0x00, 0x34, 0x00, 0x35, 0x00, 0x36, 0x00, 0x37, 0x00, 0x38, 0x00, 0x39, 0x00, 0x3a, 0x00, 0x3b, 0x00, 0x3c, 0x00, 0x3d, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x23, 0x40, 0x24, 0x40, 0x3e, 0x00, 0x3e, 0x00, 0x3f, 0x00, 0x28, 0x40, 0x40, 0x00, 0x41, 0x00, 0x42, 0x00, 0x2c, 0x40, 0x43, 0x00, 0x44, 0x00, 0x27, 0x40, 0x45, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x46, 0x00, 0x47, 0x00, 0x48, 0x00, 0x49, 0x00, 0x4a, 0x00, 0x4b, 0x00, 0x4c, 0x00, 0x4d, 0x00, 0x4a, 0x00, 0x4e, 0x00, 0x4f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x1d, 0xc0, 0x50, 0x00, 0x51, 0x00, 0x52, 0x00, 0x53, 0x00, 0x0a, 0x00, 0x54, 0x00, 0x55, 0x00, 0x56, 0x00, 0x57, 0x00, 0x58, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x2d, 0x00, 0x2e, 0x00, 0x59, 0x00, 0x5a, 0x00, 0x3f, 0xc0, 0x5b, 0x00, 0x29, 0x80, 0x5c, 0x00, 0x3f, 0x40, 0x40, 0xc0, 0x5d, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x3a, 0x00, 0x3b, 0x00, 0x5e, 0x00, 0x5f, 0x00, 0x60, 0x00, 0x61, 0x00, 0x36, 0x80, 0x62, 0x00, 0x63, 0x00, 0x64, 0x00, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x43, 0x00, 0x2e, 0x40, 0x66, 0x00, 0x67, 0x00, 0x68, 0x00, 0x69, 0x00, 0x6a, 0x00, 0x5c, 0x40, 0x6b, 0x00, 0x6c, 0x00, 0x6a, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x46, 0x00, 0x6d, 0x00, 0x6e, 0x00, 0x6f, 0x00, 0x70, 0x00, 0x71, 0x00, 0x72, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x19, 0x02, 0x00, 0x00, 0x00, 0x00, 0x1d, 0xc0, 0x73, 0x00, 0x74, 0x00, 0x75, 0x00, 0x76, 0x00, 0x77, 0x00, 0x3d, 0x40, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x19, 0x82,
		0x78, 0x02, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x79, 0x00, 0x78, 0x82,
		0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7b, 0x02, 0x7c, 0x02, 0x7d, 0x02, 0x7e, 0x02, 0x7f, 0x02, 0x7a, 0x02, 0x7a, 0x02,
		0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x7a, 0x02, 0x80, 0x02, 0x81, 0x02, 0x82, 0x02, 0x83, 0x02, 0x84, 0x02, 0x7a, 0x02, 0x7a, 0x02
	]},






	/* Create user - Type name */
	/*
		note: if first byte is changed, menu won't work correctly
		to-do: debug and find where it checks which character the cursor is on
	*/
	{offset:0x147bb, name:'Create user - Type name (ASCII)', data:[0x63,'A','B','C']},
	{offset:0x147bf, name:'Create user - Type name (END)', data:[0x68,'E','N','D']}
];