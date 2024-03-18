import * as data1 from "../data/wordCollectionLevel1.json";
import * as data2 from "../data/wordCollectionLevel2.json";
import * as data3 from "../data/wordCollectionLevel3.json";
import * as data4 from "../data/wordCollectionLevel4.json";
import * as data5 from "../data/wordCollectionLevel5.json";
import * as data6 from "../data/wordCollectionLevel6.json";

import { WordCollection } from "../arc/word-collection";
import { LevelData } from "../arc/level-data";

const dates: WordCollection[] = [data1, data2, data3, data4, data5, data6];

export const levelDates: LevelData = new LevelData(dates);