export type LanguageCode = 'kiswahili' | 'dinka' | 'arabi-juba' | 'amharic' | 'english' | 'french';

export type LanguageInfo = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  isLocal: boolean;
};

export const LANGUAGES: LanguageInfo[] = [
  { code: 'kiswahili', name: 'Kiswahili', nativeName: 'Kiswahili', flag: '🇰🇪', isLocal: true },
  { code: 'dinka', name: 'Dinka', nativeName: 'Thuɔŋjäŋ', flag: '🇸🇸', isLocal: true },
  { code: 'arabi-juba', name: 'Arabi-Juba', nativeName: 'Juba Arabic', flag: '🇸🇸', isLocal: true },
  { code: 'amharic', name: 'Amharic', nativeName: 'አማርኛ', flag: '🇪🇹', isLocal: true },
  { code: 'english', name: 'English', nativeName: 'English', flag: '🇬🇧', isLocal: false },
  { code: 'french', name: 'French', nativeName: 'Français', flag: '🇫🇷', isLocal: false },
];

export type ConceptExplanation = {
  title: string;
  description: string;
  analogy: string;
};

export type Concept = {
  id: string;
  icon: string;
  category: string;
  explanations: Record<LanguageCode, ConceptExplanation>;
};

export const CATEGORIES = [
  'Compute',
  'Storage',
  'Networking',
  'Web',
  'AI & ML',
] as const;

export const CONCEPTS: Concept[] = [
  {
    id: 'virtual-machine',
    icon: 'Server',
    category: 'Compute',
    explanations: {
      kiswahili: {
        title: 'Virtual Machine (Kompyuta ya Kawaida)',
        description:
          'Virtual Machine ni kompyuta inayofanya kazi ndani ya kompyuta nyingine, lakini inafanya kazi kama kompyuta yake mwenyewe. Ina mfumo wake, akiba yake, na nguvu yake — ila inatumia nafasi ya kompyuta kubwa inayoshirikiwa.',
        analogy:
          'Fikiria unakuwa na chumba ndani ya nyumba kubwa. Chumba chako kina mlango wako, vitu vyako, na unaweza kufunga — lakini nyumba inashirikiwa na wengine. Hivyo ndivyo Virtual Machine inavyofanya kazi kwenye wingu (cloud).',
      },
      dinka: {
        title: 'Virtual Machine (Machine me Computer)',
        description:
          'Virtual Machine e computer ye tïït në computer dïït, aka jɔ̈ɔ̈c tënëëk e ye computer në yicë. Aye cï mënë path, ram, ka power — nɔŋpath e wëër computer dïït in cï bɛ̈c bïk thɛɛr.',
        analogy:
          'Cɛ̈ mɛn tënë nyiɛ̈ɛ̈c tënë ye juɔ̈ɔ̈p në dhɔ̈k dïït. Bɛ̈nyi juɔ̈ɔ̈p aye cï dhöl bɛ̈nyi, rëël bɛ̈nyi, ka yicï bɛ̈nyi — nɔŋpath dhɔ̈k ee cï bɛ̈c thɛɛr. Nënë Virtual Machine aye tïït në cloud.',
      },
      'arabi-juba': {
        title: 'Virtual Machine (Computer al-Cloud)',
        description:
          'Virtual Machine de computer ze tigera goa fi computer kibira, ma bugaru ka tigera lel computer ta kila. Ibo mara system ta, memory ta, ka power ta — bas ta tigera lel computer kibira ze tigera fi cloud.',
        analogy:
          'Dukir bi odoba ke kibira fi da kibira. Odoba ta bimo bab ta, ke ja ta, ka tigera yin — bas da kibira de tigera ma nas kelen. Haka Virtual Machine tigera fi cloud.',
      },
      amharic: {
        title: 'Virtual Machine (ቨርቹዋል ማሺን)',
        description:
          'Virtual Machine በሌላ ኮምፒውተር ውስጥ የሚሰራ ኮምፒውተር ነው፣ ነገር ግን እንደ ራሱ እንደሚለየ ኮምፒውተር ይሰራል። የራሱ ስርዓት፣ ማስታወሻ፣ እና ኃይል አለው — ግን በትልቅ ኮምፒውተር ውስጥ ቦታ ይጠቀማል።',
        analogy:
          'በትልቅ ቤት ውስጥ እንዳንድ ክፍል አለህ ልብ ውሰድ። ክፍልህ የራሱ በር፣ የራሱ እቃዎች፣ እና መቆለፊያ አለው — ነገር ግን ቤቱ በሌሎች ይጋራል። እንዲሁ ነው Virtual Machine በክላውድ ውስጥ የሚሰራው።',
      },
      english: {
        title: 'Virtual Machine',
        description:
          'A Virtual Machine is a computer that runs inside another computer but behaves like a separate, independent machine. It has its own operating system, memory, and processing power — but shares the physical resources of the host machine.',
        analogy:
          'Imagine renting a room in a big house. Your room has your own door, your own furniture, and you can lock it — but the house itself is shared. That is exactly how a Virtual Machine works in the cloud.',
      },
      french: {
        title: 'Machine Virtuelle',
        description:
          'Une Machine Virtuelle est un ordinateur qui fonctionne à l\'intérieur d\'un autre ordinateur mais qui se comporte comme une machine indépendante. Elle possède son propre système d\'exploitation, sa mémoire et sa puissance de traitement — mais partage les ressources physiques de l\'ordinateur hôte.',
        analogy:
          'Imaginez que vous louez une chambre dans une grande maison. Votre chambre a sa propre porte, ses propres meubles, et vous pouvez la fermer à clé — mais la maison est partagée. C\'est exactement ainsi que fonctionne une Machine Virtuelle dans le cloud.',
      },
    },
  },
  {
    id: 'cloud-storage',
    icon: 'Database',
    category: 'Storage',
    explanations: {
      kiswahili: {
        title: 'Cloud Storage (Hifadhi ya Wingu)',
        description:
          'Cloud Storage ni nafasi ya kuhifadhi mafaili, picha, na data zako kwenye mtandao badala ya kompyuta yako. Unaweza kuyaona kutoka popote na wakati wowote, na hayapotei hata kompyuta yako ikiharibika.',
        analogy:
          'Kama vile unavyoweza kuweka pesa kwenye akaunti ya benki na kuzitoa kutoka ATM yoyote — hivyo Cloud Storage inakuwezesha kuhifadhi data zako kwenye wingu na kuzipata kutoka kwenye kifaa chochote.',
      },
      dinka: {
        title: 'Cloud Storage (Wɛ̈t të Cloud)',
        description:
          'Cloud Storage e bɛ̈rë në cï muk files, photos, ka data në internet në yic computer ta. Icï wɛ̈t ën në kaam ke ciëën, ka cï data tënëëk në cï wɛ̈r device kaam ke ciën.',
        analogy:
          'Bïk mɛn tënë në ye cï lɛth money në bank account ka cï lɔ bïk ATM kaam — nënë Cloud Storage icï bɛ̈r data në cloud ka cï wɛ̈t në device kaam ke ciëën.',
      },
      'arabi-juba': {
        title: 'Cloud Storage (Kesef fi Cloud)',
        description:
          'Cloud Storage de ketera fi kete files, photos, ka data ta fi internet asal ta computer. Ibi gira wun goa fi ketera ke ji, ka ketera bi garia kelen kelen fi device kelen.',
        analogy:
          'Haka bi odoba ke bank account, bi odoba ke ATM ke kelen — Cloud Storage de ketera data ta fi cloud ka ketera bi garia fi device kelen kelen.',
      },
      amharic: {
        title: 'Cloud Storage (የደመና ማከማቻ)',
        description:
          'Cloud Storage ፋይሎችን፣ ምስሎችን እና የእርስዎን ውሂብ በኮምፒውተርዎ ላይ ሳይሆን በኢንተርኔት ላይ ለማከማቸት የሚያስችል ቦታ ነው። ከየትም እና በማንኛውም ጊዜ ማየት ይችላሉ፣ እና ኮምፒውተርዎ ቢጠፍጥፈም ውሂብዎ አይጠፋም።',
        analogy:
          'ገንዘብዎን በባንክ ሂሳብ ላይ ጣል እና ከማንኛውም ኤቲኤም ማውጣት እንደሚችሉ — እንዲሁ Cloud Storage ውሂብዎን በደመና ላይ ለማከማቸት እና ከማንኛውም መሣሪያ ለማግኘት ያስችልዎታል።',
      },
      english: {
        title: 'Cloud Storage',
        description:
          'Cloud Storage is a service that lets you store your files, photos, and data on the internet instead of on your computer. You can access them from anywhere at any time, and they won\'t be lost even if your computer breaks.',
        analogy:
          'Just like you can deposit money into a bank account and withdraw it from any ATM — Cloud Storage lets you store your data in the cloud and access it from any device, anywhere.',
      },
      french: {
        title: 'Stockage Cloud',
        description:
          'Le Stockage Cloud est un service qui permet de stocker vos fichiers, photos et données sur Internet plutôt que sur votre ordinateur. Vous pouvez y accéder de n\'importe où et à tout moment, et vos données ne seront pas perdues même si votre ordinateur tombe en panne.',
        analogy:
          'Tout comme vous déposez de l\'argent sur un compte bancaire et le retirez à n\'importe quel distributeur — le Stockage Cloud vous permet de stocker vos données dans le cloud et d\'y accéder depuis n\'importe quel appareil.',
      },
    },
  },
  {
    id: 'virtual-network',
    icon: 'Network',
    category: 'Networking',
    explanations: {
      kiswahili: {
        title: 'Virtual Network (Mtandao wa Kawaida)',
        description:
          'Virtual Network ni mtandao unaojenga kwenye wingu ili kuunganisha kompyuta na vifaa tofauti bila kutumia waya. Inafanya kazi kama mtandao wa kawaida wa ofisini, lakini haipaswi kuwekwa waya — kila kitu kinafanyika mtandaoni.',
        analogy:
          'Ni kama kikundi cha marafiki wanaozungumza kupitia simu — wanaweza kuzungumza pamoja bila kuwa pamoja kimwili. Virtual Network inaunganisha kompyuta kwa njia ya mtandao bila waya.',
      },
      dinka: {
        title: 'Virtual Network (Network të Cloud)',
        description:
          'Virtual Network e network ye cï bɛ̈n në cloud në wëër computer ka devices në yic cïköl wire. Aye tïït lel network të office, bas cïköl wire — kɛ̈ɛ̈ke nëntïït në internet.',
        analogy:
          'Cɛ̈ mɛn tënë group të friends në cï wëër telefon — aye wë̈r ën nëntïït në yic cïköl wëër cɔl wëër. Virtual Network aye wɛ̈r computer në internet në yic cïköl wire.',
      },
      'arabi-juba': {
        title: 'Virtual Network (Network fi Cloud)',
        description:
          'Virtual Network de network ze tigera fi cloud asal bi connectera computer ka devices ke kelen bas ta wire. Tigera lel network fi office, bas ta wire — ke kelen tigera fi internet.',
        analogy:
          'Dukir group ta friends ze tigera fi telefon — tigera goa pamoja bas ta goa pamoja. Virtual Network bi connectera computer fi internet bas ta wire.',
      },
      amharic: {
        title: 'Virtual Network (እስትናዊ አውታረ መረብ)',
        description:
          'Virtual Network በደመና ላይ የሚፈጠር አውታረ መረብ ሲሆን ኮምፒውተሮችን እና መሣሪያዎችን በገመድ ሳይጠቀም ያገናኛል። እንደ ቢሮ አውታረ መረብ ይሰራል፣ ግን ገመድ አይጠቀምም — ሁሉም በኢንተርኔት ይካሄዳል።',
        analogy:
          'በስልክ በኩል የሚጠቀሙ ጓደኞች እንደሚጠቀሙ — በአካል ሳይገኙ አብረው መግባባት ይችላሉ። Virtual Network ኮምፒውተሮችን በገመድ ሳይጠቀም በኢንተርኔት ያገናኛል።',
      },
      english: {
        title: 'Virtual Network',
        description:
          'A Virtual Network is a network you create in the cloud to connect computers and devices together without physical cables. It works just like an office network, but there are no wires — everything runs over the internet.',
        analogy:
          'Think of a group of friends talking through phone calls — they communicate together without being physically in the same place. A Virtual Network connects computers through the internet without any cables.',
      },
      french: {
        title: 'Réseau Virtuel',
        description:
          'Un Réseau Virtuel est un réseau que vous créez dans le cloud pour connecter des ordinateurs et des appareils sans câbles physiques. Il fonctionne comme un réseau de bureau, mais sans fils — tout passe par Internet.',
        analogy:
          'Pensez à un groupe d\'amis qui communiquent par téléphone — ils discutent ensemble sans être physiquement au même endroit. Un Réseau Virtuel connecte les ordinateurs via Internet sans aucun câble.',
      },
    },
  },
  {
    id: 'app-service',
    icon: 'Globe',
    category: 'Web',
    explanations: {
      kiswahili: {
        title: 'App Service (Huduma ya Programu)',
        description:
          'App Service ni jukwaa la wingu linalokuwezesha kuweka tovuti yako au programu yako mtandaoni bila kujali seva. Unachohitaji ni kuweka msimbo wako, na Microsoft Azure inashughulikia mabaki — usalama, upatikanaji, na udhibiti.',
        analogy:
          'Ni kama kukodisha duka katika kiwanja kikubwa cha biashara. Wewe unaleta bidhaa zako na kuziweka — mmiliki wa jengo anashughulikia usalama, umeme, na maji. Hivyo App Service inashughulikia miundombinu ya programu yako.',
      },
      dinka: {
        title: 'App Service (Service të App)',
        description:
          'App Service e platform të cloud në cï bɛ̈n në wëër website ka app në internet në yic cïköl server. Icï code ta nënë, ka Microsoft Azure aye cï muk security, availability, ka management të cït.',
        analogy:
          'Cɛ̈ mɛn tënë në cï lɔ bïk duka në market dïït. Icï rëël ta ka cï cï nënë — owner të building aye cï muk security, electricity, ka water. Nënë App Service aye cï muk infrastructure të app ta.',
      },
      'arabi-juba': {
        title: 'App Service (Service ta App)',
        description:
          'App Service de platform fi cloud ze bimo bi put website ka app ta fi internet bas ta server. Bimo code ta, ka Microsoft Azure bi kala security, availability, ka management kelen.',
        analogy:
          'Haka bi odoba ke shop fi market kibira. Bi odoba goods ta ka put — owner ta building bi kala security, electricity, ka water. Haka App Service bi kala infrastructure ta app ta.',
      },
      amharic: {
        title: 'App Service (የአፕ አገልግሎት)',
        description:
          'App Service በደመና ላይ ያለ መድረክ ሲሆን ድረ-ገጽዎን ወይም አፕሊኬሽንዎን ያለ ሰርቨር በኢንተርኔት ላይ ለማኖር ያስችልዎታል። ኮድዎን ብቻ ያኖሩ፣ እና Microsoft Azure ወንበርዎን — ደህንነት፣ ተደራሽነት እና አስተዳደር ይከታተላል።',
        analogy:
          'በትልቅ ገበያ ውስጥ ሱቅ ለኪራይ መውሰድን ልብ ውሰድ። እቃዎችን ይዘው ያኖራሉ — የህንግ ባለቤት ደህንነት፣ ኤሌክትሪክ እና ውሃ ይከታተላል። እንዲሁ App Service የአፕሊኬሽንዎ መሰረት ይከታተላል።',
      },
      english: {
        title: 'App Service',
        description:
          'App Service is a cloud platform that lets you host your website or web application online without managing a server. You just deploy your code, and Microsoft Azure handles the rest — security, scaling, and management.',
        analogy:
          'It is like renting a shop in a large shopping mall. You bring your products and set them up — the mall owner handles security, electricity, and water. App Service handles the infrastructure for your application.',
      },
      french: {
        title: 'App Service',
        description:
          'App Service est une plateforme cloud qui vous permet d\'héberger votre site web ou application en ligne sans gérer de serveur. Vous déployez simplement votre code, et Microsoft Azure s\'occupe du reste — sécurité, évolutivité et gestion.',
        analogy:
          'C\'est comme louer une boutique dans un grand centre commercial. Vous apportez vos produits et les installez — le propriétaire s\'occupe de la sécurité, de l\'électricité et de l\'eau. App Service s\'occupe de l\'infrastructure de votre application.',
      },
    },
  },
  {
    id: 'azure-functions',
    icon: 'Zap',
    category: 'Compute',
    explanations: {
      kiswahili: {
        title: 'Azure Functions (Shughuli za Wingu)',
        description:
          'Azure Functions ni huduma inayokuwezesha kuandika msimbo mdogo unaoendeshwa tu unapohitajika. Huhitaji kuweka seva au kulipia wakati usiotumika — inalipwa tu wakati msimbo wako unapofanya kazi.',
        analogy:
          'Ni kama kodi ya teksi — unalipia tu wakati unaoenda, sio wakati teksi inasimama. Azure Functions inalipiwa tu wakati msimbo unapofanya kazi, sio wakati unaposhubiria.',
      },
      dinka: {
        title: 'Azure Functions (Function të Cloud)',
        description:
          'Azure Functions e service në cï bɛ̈n në wëër code tën në cï run në kaam cï rɔ̈c. Cïköl server ka cï pay në kaam cï tïït — aye pay në kaam cï code tïït.',
        analogy:
          'Cɛ̈ mɛn tënë tënë taxi — icï pay në kaam cï lɔ, cïköl në kaam cï taxi dhiɔ̈ɔ̈p. Azure Functions aye pay në kaam cï code tïït, cïköl në kaam cï wɛ̈r.',
      },
      'arabi-juba': {
        title: 'Azure Functions (Function fi Cloud)',
        description:
          'Azure Functions de service ze bimo bi write code ke ji ze run fi wakti ze lazim. Bila ta server ka bila ta pay fi wakti ze bugaru — bi pay fi wakti code run ke ji.',
        analogy:
          'Haka fare ta taxi — bi pay fi wakti ze tigera, bas fi wakti taxi ze stop. Azure Functions bi pay fi wakti code run ke ji, bas fi wakti ze stop.',
      },
      amharic: {
        title: 'Azure Functions (የደመና ተግባሮች)',
        description:
          'Azure Functions ሲሆን የሚፈለጊበት ጊዜ ብቻ የሚካሄድ አጭር ኮድ ለመጻፍ የሚያስችል አገልግሎት ነው። ሰርቨር ማኖር ወይም ያልተጠቀሙበትን ጊዜ መክፈል አያስፈልግም — ኮድዎ ሲካሄድ ብቻ ይከፍላል።',
        analogy:
          'የታክሲ ክፍያ እንደሚከፍሉ — ሲኼዱ ብቻ ይከፍሉ እንጂ ታክሲ ሲቆማ አይከፍሉም። Azure Functions ኮድ ሲካሄድ ብቻ ይከፍላል፣ ሲጠብቅ አይከፍልም።',
      },
      english: {
        title: 'Azure Functions',
        description:
          'Azure Functions is a service that lets you write small pieces of code that run only when triggered. You do not need to manage a server or pay for idle time — you are billed only for the moments your code executes.',
        analogy:
          'It is like paying for a taxi — you pay only for the ride, not for the time the taxi is parked. Azure Functions charges you only when your code runs, not while it waits.',
      },
      french: {
        title: 'Azure Functions',
        description:
          'Azure Functions est un service qui vous permet d\'écrire de petits morceaux de code qui ne s\'exécutent que lorsqu\'ils sont déclenchés. Pas besoin de gérer un serveur ni de payer pour le temps d\'inactivité — vous ne payez que lorsque votre code s\'exécute.',
        analogy:
          'C\'est comme payer un taxi — vous ne payez que pour le trajet, pas pour le temps où le taxi est stationné. Azure Functions ne vous facture que lorsque votre code s\'exécute, pas pendant qu\'il attend.',
      },
    },
  },
  {
    id: 'ai-ml',
    icon: 'BrainCircuit',
    category: 'AI & ML',
    explanations: {
      kiswahili: {
        title: 'Azure AI & Machine Learning',
        description:
          'Azure AI na Machine Learning ni huduma zinazokuwezesha kufundisha kompyuta kujifunza kutoka kwa data na kukubaliana na maamuzi bila kuandikwa kila kitu kwa mikono. Inaweza kutambua picha, kusikiliza sauti, na kutafsiri lugha.',
        analogy:
          'Ni kama kumfundisha mtoto — mwanzoni unamonyesha jinsi ya kutambua matunda, na baadaye mtoto anaweza kutambua peke yake. Machine Learning inafanya kazi kama hivyo — kompyuta inajifunza kutoka kwa data na kufanya maamuzi yenyewe.',
      },
      dinka: {
        title: 'Azure AI & Machine Learning',
        description:
          'Azure AI ka Machine Learning e services në cï bɛ̈n në wëër computer në cï lɔ̈ŋ në data ka cï bɛ̈n në decision në yic cïköl cï lɔ̈k cït në kaam. Aye wɛ̈r në photo, wɛ̈r në sound, ka translate në languages.',
        analogy:
          'Cɛ̈ mɛn tënë në cï lɔ̈ŋ child — në cïmën në cï wɛ̈r në cï wɛ̈t fruit, ka nëënë child aye wɛ̈r nëntïït në yic. Machine Learning aye tïït në nënë — computer aye lɔ̈ŋ në data ka cï bɛ̈n në decision në yic.',
      },
      'arabi-juba': {
        title: 'Azure AI & Machine Learning',
        description:
          'Azure AI ka Machine Learning de services ze bimo bi teach computer bi learn fi data ka bi take decision bas ta write kelen kelen. Bi gara photo, bi listen sound, ka bi translate languages.',
        analogy:
          'Haka bi teach child — asal bi show bi kete fruit, ka ba bi identify ke ji. Machine Learning tigera lel — computer bi learn fi data ka bi take decision ke ji.',
      },
      amharic: {
        title: 'Azure AI & Machine Learning',
        description:
          'Azure AI እና Machine Learning ኮምፒውተርን ከውሂብ መማር እና ያለ እጅ አደራጅት ውሳኔ ለማድረግ የሚያስችሉ አገልግሎቶች ናቸው። ምስሎችን ለመለየት፣ ድምፅን ለመስማት፣ እና ቋንቋዎችን ለመተርጎም ይችላል።',
        analogy:
          'ልጅን እንደሚያስተምሩ — መጀመሪያ ፍራፍሬዎችን እንዴት እንደሚለዩ ያሳያሉ፣ እና በኋላ ልጁ በራሱ ይለያል። Machine Learning እንዲሁ ይሰራል — ኮምፒውተር ከውሂብ ይማር እና በራሱ ውሳኔ ይይዛል።',
      },
      english: {
        title: 'Azure AI & Machine Learning',
        description:
          'Azure AI and Machine Learning are services that let you teach computers to learn from data and make decisions without manually coding every rule. They can recognize images, understand speech, and translate languages.',
        analogy:
          'It is like teaching a child — at first you show them how to recognize fruits, and later the child can identify them alone. Machine Learning works the same way — the computer learns from data and makes its own decisions.',
      },
      french: {
        title: 'Azure AI & Machine Learning',
        description:
          'Azure AI et Machine Learning sont des services qui permettent d\'apprendre aux ordinateurs à tirer des leçons des données et à prendre des décisions sans coder manuellement chaque règle. Ils peuvent reconnaître des images, comprendre la parole et traduire des langues.',
        analogy:
          'C\'est comme enseigner à un enfant — d\'abord vous lui montrez comment reconnaître les fruits, et ensuite l\'enfant peut les identifier seul. Le Machine Learning fonctionne de la même façon — l\'ordinateur apprend des données et prend ses propres décisions.',
      },
    },
  },
];
