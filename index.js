    const json_content = [
        {
            "id": "0001",
            "type": "donut",
            "name": "Cake",
            "ppu": 0.78,
            "batters": {
                "batter": [
                    {
                        "id": "1001",
                        "type": "Regular"
                    },
                    {
                        "id": "1002",
                        "type": "Chocolate"
                    },
                    {
                        "id": "1003",
                        "type": "Blueberry"
                    },
                    {
                        "id": "1004",
                        "type": "Devil's Food"
                    }
					]
            },
            "topping": [
                {
                    "id": "5001",
                    "type": "None"
                },
                {
                    "id": "5002",
                    "type": "Glazed"
                },
                {
                    "id": "5005",
                    "type": "Sugar"
                },
                {
                    "id": "5007",
                    "type": "Powdered Sugar"
                },
                {
                    "id": "5006",
                    "type": "Chocolate with Sprinkles"
                },
                {
                    "id": "5003",
                    "type": "Chocolate"
                },
                {
                    "id": "5004",
                    "type": "Maple"
                }
			]
	},
        {
            "id": "0002",
            "type": "donut",
            "name": "Raised",
            "ppu": 0.55,
            "batters": {
                "batter": [
                    {
                        "id": "1001",
                        "type": "Regular"
                    }
					]
            },
            "topping": [
                {
                    "id": "5001",
                    "type": "None"
                },
                {
                    "id": "5002",
                    "type": "Glazed"
                },
                {
                    "id": "5005",
                    "type": "Sugar"
                },
                {
                    "id": "5003",
                    "type": "Chocolate"
                },
                {
                    "id": "5004",
                    "type": "Maple"
                }
			]
	},
        {
            "id": "0003",
            "type": "donut",
            "name": "Old Fashioned",
            "ppu": 0.26,
            "batters": {
                "batter": [
                    {
                        "id": "1001",
                        "type": "Regular"
                    },
                    {
                        "id": "1002",
                        "type": "Chocolate"
                    }
					]
            },
            "topping": [
                {
                    "id": "5001",
                    "type": "None"
                },
                {
                    "id": "5002",
                    "type": "Glazed"
                },
                {
                    "id": "5003",
                    "type": "Chocolate"
                },
                {
                    "id": "5004",
                    "type": "Maple"
                }
			]
	}
];

    var topping_types = [],
        batters_types = [],
        ids = [],
        ppuSum = 0,
        ppuAvg = 0,
        ppuCount = 0;

    for (obj of json_content) {
        if (!ids.includes(obj.id))
            ids.push(obj.id);

        for (topping_type of obj.topping) {
            if (!ids.includes(topping_type.id))
                ids.push(topping_type.id);

            if (!topping_types.includes(topping_type.type))
                topping_types.push(topping_type.type);
        }

        for (batters_type of obj.batters.batter) {
            if (!ids.includes(batters_type.id))
                ids.push(batters_type.id);
            if (!batters_types.includes(batters_type.type))
                batters_types.push(batters_type.type);
        }

        ppuSum += obj.ppu;
        ppuCount++;
    }

    console.log("Topping attributes: " + topping_types.toString());
    console.log("Batter attributes: " + batters_types.toString());
    console.log("PPU Sum: " + ppuSum);
    console.log("PPU avg: " + (ppuSum * 1.0) / ppuCount);
    console.log("Ids: " + ids.toString());
