const mainSrc = '/mbti/';

export interface MBTIResult {
  MBTI: string;
  img_main: string;
  instaId: string;
  gram: string;
  title: string;
  tag: string;
  description: string;
}

export interface ChemistryResultInfo {
  title: string;
  tag: string;
}

export const MBTI_RESULT: MBTIResult[] = [
  {
    MBTI: 'ESTP',
    img_main: mainSrc + 'estp-22.svg',
    instaId: 'noppaggu',
    gram: '노빠꾸스타그램',
    title: '엽사 아니고 이렇게 생긴 건데요?',
    tag: '#노빠꾸 #강경행동파 #인싸대장',
    description:
      '친구들이랑 사진 찍으면 물어보지도 않고 일단 스토리부터 올리고 보는 당신! 웃기고 재밌는 건 고민 없이 바로 올려요. 그게 엽사라도 상관없어요. 오히려 좋을지도? 호불호가 확실해서 관심 없는 글에는 눈길도 주지 않아요. 반대로 취향 저격인 글이 보이면 참지 않고 스토리 공유! 가끔 친구들 게시글 여기저기 남기는 댓글은 트럼프도 울고 갈 팩트 폭격기!',
  },
  {
    MBTI: 'ESFP',
    img_main: mainSrc + 'esfp-22.svg',
    instaId: 'hong_baksa',
    gram: '개그스타그램',
    title: '홍홍홍 홍홍홍 홍 홍 홍박사님을 아세요?',
    tag: '#릴스지망생 #센스폭발 #하태하태',
    description:
      '주변 사람들의 웃음을 책임지고 있는 당신! 댓글과 좋아요를 받아 다음번 웃음도 책임질게요! 여행을 가거나 친구들끼리 모이면 평범한 사진은 절대 용납 못해요! 기발하고 기상천외한 사진을 많이 찍어요. 덕분에 스토리 올리면 DM 폭주! 관심 끄는 법을 아는 프로 중에 프로랍니다! 그렇다고 게시물을 두서없이 올리지 않아요. 이쁘게 정리된 피드, 혹시 사진작가?',
  },
  {
    MBTI: 'ENFP',
    img_main: mainSrc + 'enfp-22.svg',
    instaId: 'free_daengdaeng',
    gram: '댕댕꾸스타그램',
    title: '저도 제가 어디로 튈지 몰라요!',
    tag: '#자유분방 #호기심가득 #댕댕이매력',
    description:
      '친구들의 피드에서 재치와 위트를 담당하는 센스만점 자유로운 댕댕이 그 자체인 당신! 인스타는 자유롭게 표현하는 공간, 업로드할 때 어떤 구애도 받지 않아요. 신나도 Go! 슬퍼도 Go! 어디를 가나 스토리 담당! 보여주고 싶은 것 전부 바로바로 스토리에 올려요. 그리고 친구들의 게시글에 숨 쉬듯이 주접 댓글을 남기며 인스타 대표 행복 전도사로 활동해요!',
  },
  {
    MBTI: 'ENTP',
    img_main: mainSrc + 'entp-22.svg',
    instaId: 'fun_cool_sexy',
    gram: '쿨스타그램',
    title: '엥? 나는 그렇게 생각 안하는데...',
    tag: '#쿨내풀풀 #내가최고 #잔소리대마왕',
    description:
      '혹시 당신은 토론토 출신? 논쟁과 토론을 즐겨 인스타에서도 절대 참지 않아요. 숨기려 해도 숨길 수 없는 나의 멋. 피드만 봐도 간지 폭발! 매력이 넘쳐흘러요. 그런 멋에 관심받는 것을 은근히 즐겨요. 스토리 하나둘씩 올리다 보니 어느덧 점이 되어... 그리고 재미있는 유머 게시글을 보면 친구들한테 공유해요! 안 웃겨도 내가 재밌으면 그만ㅋ',
  },
  {
    MBTI: 'ESTJ',
    img_main: mainSrc + 'estj-22.svg',
    instaId: 'margun_gothic',
    gram: '정갈스타그램',
    title: '철저히 필요에 의해 씁니다만?',
    tag: '#잘안해요 #안하거나 #확실히하거나',
    description:
      '그저 필요해 의해 사용할 뿐 인스타에 빠져 사는 사람들을 이해할 수 없는 당신! SNS는 안 하는 경우가 더 많은데 한다면 확실하게 기록, 정리하는 편.. 흡사 인생 포트폴리오... 철저하고 세밀하게 보여주고 싶은 부분만 보여주고 다른 사람 반응도 딱히 신경 안 써요. 그래도 친구들이랑 재미있게 놀 때는 직접 스토리를 맡아 한 명 한 명 태그해 스토리도 올린답니다!',
  },
  {
    MBTI: 'ESFJ',
    img_main: mainSrc + 'esfj-22.svg',
    instaId: 'insta_lv.999',
    gram: '인싸스타그램',
    title: '안녕하세요 인스타 만렙입니다',
    tag: '#인싸중에인싸 #분위기메이커',
    description:
      '친구들이 가볍게 올린 스토리에도 혜자 리액션을 보내고 있는 "소통해요" 그 자체인 당신! 지금, 이 순간 결과를 반도 안 읽었지만 벌써 공유할 생각 중이신가요? 팔로워와 좋아요는 다다익선! 그리고 게시글을 올려도 사람들이 많이 보는 시간에 올려요! 와중에 피드를 둘러보다 꼭 가야겠다고 생각한 맛집 게시글은 야무지게 저장해 둬요.',
  },
  {
    MBTI: 'ENFJ',
    img_main: mainSrc + 'enfj-22.svg',
    instaId: 'full_of_heart',
    gram: '정성스타그램',
    title: '정 주나요 안정주나요 늘 정주는 날 알아줘~',
    tag: '#센스가득 #눈치눈치 #좋아요확인',
    description:
      '어떤 게시글이든 절대 그냥 올리지 않는 당신! 베스트 컷만 차곡차곡 모아 글도 꽉꽉 채워 업로드해요. 스토리도 마찬가지예요. 글과 스티커 가득 온 마음을 담아 업로드해요. 친구들이 스토리로 도움을 요청하면 절대 지나치지 않는 인스타 속 슈퍼맨! 하지만 미어캣처럼 사소한 것 하나하나 눈치를 보기도 해요. 지금, 이 결과를 공유하는 것도 고민 중일지도...',
  },
  {
    MBTI: 'ENTJ',
    img_main: mainSrc + 'entj-22.svg',
    instaId: 'ganzi_jaksal',
    gram: '멋쟁스타그램',
    title: '제가 멋있나요? 저도 알아요.',
    tag: '#스펙빵빵 #자아도취 #팩트폭격기',
    description:
      '진취적인 성격이 인스타에 그대로 나타나는 당신. 게시글만 봐도 멋진 아우라가 뿜뿜 뿜어져 나와요. 인스타에 올라오는 새벽감성 글을 보면 가끔 이해가 되지 않아요...  무조건 Simple is Best. 사진은 열심히 고르지만 게시물에 글은 많이 안 써요. 가끔 성과 자랑하는 용도 외에는 거의 사용하지 않아요. 왜냐하면 인스타 할 시간이 없거든요!',
  },
  {
    MBTI: 'ISTJ',
    img_main: mainSrc + 'istj-22.svg',
    instaId: 'give_me_cola',
    gram: '실속스타그램',
    title: '안친하면 팔로우 걸기 금지ㅎ',
    tag: '#귀찮아요 #맞팔잘안함 #서비스주세요',
    description:
      '비공개 계정일 확률이 99%인 당신! 혹시 지금 테스트 하려고 공개로 잠깐 바꿨나요? 인스타를 원래 잘 안 하지만 팔로우도 진짜 친한 사이 아니면 잘 안 받아요. 그래도 추억 남겨두는 것을 좋아해서 일기장 용도로 인스타를 하고 있어요. 꽁꽁 숨겨 기록하는 와중에 실속 챙기기 장인이에요! 그래서 음식점에서 진행하는 인스타 이벤트는 기꺼이 참여하는 편!',
  },
  {
    MBTI: 'ISFJ',
    img_main: mainSrc + 'isfj-22.svg',
    instaId: 'cherishmylife',
    gram: '소확행스타그램',
    title: '내 일상은 작지만 소듕해.....',
    tag: '#눈팅주의 #맞팔잘받는 #배려천사',
    description:
      '자랑하려는 게시글은 없어요! 소중한 일상과 추억을 차곡차곡 기록하는 당신! 그래서 그런지 감성적인 데이트 코스 게시글은 바로바로 저장해 둔답니다! 보통 어두운 밤, 침대에 누워 친구들의 피드를 눈팅하고, 친구들과 DM하려고 인스타 해요. 또 부탁을 잘 들어주는 편이라 팔로우도 잘 받아주고 태그된 스토리도 바로바로 공유해요!',
  },
  {
    MBTI: 'INFJ',
    img_main: mainSrc + 'infj-22.svg',
    instaId: 'warm_hearted',
    gram: '따뜻스타그램',
    title: '괜찮아 내가 널 응원할게!',
    tag: '#정성가득 #걱정가득 #프로상담러',
    description:
      '당신은 모두를 녹여버릴 수 있는 따뜻한 마음의 소유자! 모두에게 정성 가득 진심으로 대해요. 평소에 걱정이 많아 가끔 힘들 때 친친 스토리로 의미심장한 스토리 하나 슬쩍 올려요... 그래서 그런지 고민 있어 보이는 친구는 그냥 지나치지 못해요. 어떻게든 도와주고 싶어 해요. 가끔 올리는 스토리와 게시글은 절대 대충 올리지 않고 하나하나 정성 가득하게!',
  },
  {
    MBTI: 'INTJ',
    img_main: mainSrc + 'intj-22.svg',
    instaId: 'idont_care',
    gram: '무관심스타그램',
    title: '인스타 귀찮아서 잘 안하는데요...',
    tag: '#SNS는 #시간낭비 #하더라도 #완벽주의',
    description:
      '친구들이 태그 해야한다고 설득해 부랴부랴 계정을 만들었을 것 같은 당신. 스토리 태그 당했을 때만 공유 스토리를 볼 수 있는 전설의 포켓몬 같은 존재예요. 인스타는 정말 시간 낭비라고 생각해 잘 들어가지도 않고 게시글도 잘 안올리지만, 업로드가 필요하다면 하나부터 열까지  완벽하게 따져 피드를 꾸며야하는 완벽주의자 성향을 가지고 있어요!',
  },
  {
    MBTI: 'ISTP',
    img_main: mainSrc + 'istp-22.svg',
    instaId: 'tasty_crople',
    gram: '겉바속촉스타그램',
    title: '말하는 것도 너무 귀찮아요...',
    tag: '#의외로인싸 #안하거나 #미쳐있거나',
    description:
      '좋아요나 팔로워에 전혀 신경 쓰지 않는 당신! 좋아하는 것만 열심히 구경할 뿐... 사실 인스타 자체를 귀찮아서 잘 안 하는데 부계정을 파서 취미는 은밀하게 즐겨요. 눈팅을 주로 하지만 친구들이랑 놀러 가면 스토리 공유는 꼬박꼬박 잘한답니다! 딸랑 나만 나온 사진을 업로드하기보다 바글바글 친구들과 함께 찍은 사진을 위주로 올려요!',
  },
  {
    MBTI: 'ISFP',
    img_main: mainSrc + 'isfp-22.svg',
    instaId: 'i_love_bed',
    gram: '눕스타그램',
    title: '이불밖은 위험해요...',
    tag: '#할건다하는 #얼렁뚱땅 #집순이',
    description:
      '대부분의 시간을 이불 속에서 보내는 당신! 지금도 이불 속에서 인스타 중이신가요? 밖으로 나가는 건 굉장히 귀찮지만 그래도 친구가 부르면 어기적거리며 나가는 편이에요. 놀러 갈 때마다 스토리 업로드 왕창! 게시물 정리해서 올려야지 했다가도 귀찮아서 미루고 미루다 몇 주 뒤 뒷북 둥둥둥... 그래도 여행 다니는 걸 좋아해 피드가 예쁜 여행 사진으로 채워져 있어요.',
  },
  {
    MBTI: 'INFP',
    img_main: mainSrc + 'infp-22.svg',
    instaId: 'hidden_mystery',
    gram: '숨김스타그램',
    title: '본계: 오랜만이네~ / 부계: 와 이게 누구야 미친!!',
    tag: '#본계를 #본계라 #부르지 #못하고',
    description:
      '본 계정에는 딱히 관심 없는 당신. 하지만 찐친으로 똘똘 뭉친 부계에서는 "소환사가 미쳐 날뛰고 있습니다" 탐색 탭에 귀여운 동물들과 아기들이 가득차 있지 않나요? 진짜 MBTI는 C.U.T.E가 분명해요. 늦은 새벽만 되면 감성 글들을 보며 생각에 잠길 때가 많은 감수성 만렙이에요. 거기에 개복치 멘탈이라 사소한 인스타 반응에도 항상 신경 쓰는 예민보스!',
  },
  {
    MBTI: 'INTP',
    img_main: mainSrc + 'intp-22.svg',
    instaId: 'window_shopping',
    gram: '눈팅스타그램',
    title: '마음만 먹으면 세계 정복할 수 있는데...',
    tag: '#프로눈팅러 #덕질하거나 #정보수집용',
    description:
      '프로필 사진이 기본 사진일 확률이 높은 당신. 인스타는 자주 해도 나를 보여주진 않아요. 대신 내가 빠져있는 관심 분야를 팔로우해서 열심히 덕질해요. 이외에는... 안녕히 계세요... 친구들 스토리를 아무 생각 없이 넘기지만 가끔 마음에 쏙 드는 게 있으면 답장해요. 가끔 자랑하는 글을 올리는데 다른 사람의 시선은 전혀 신경 쓰지 않는 마이웨이!',
  },
];

export const MBTI_CHEMISTRY: ChemistryResultInfo[] = [
  {
    title: '스토리에 매일 태그해서 올리는 사이',
    tag: '#도원결의 #재밌으면 #바로태그',
  },
  {
    title: '가끔 릴스로 주고받고 탁구치는 사이',
    tag: '#친친단골 #DM하면 #ㅋ이절반',
  },
  {
    title: '가끔 스토리 답장해주는 사이',
    tag: '#사진에 #좋아요는 #바로바로',
  },
  {
    title: '방금 술자리에서 맞팔한 사이',
    tag: '#저희아직 #어색해요 #친친은아님',
  },
];
