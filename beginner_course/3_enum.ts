enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membership2 = Membership[2];

enum SocialMedia {
    VK = 'VKONTAKTE',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social);