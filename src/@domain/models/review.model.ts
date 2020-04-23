export interface Review {
    id: number,
    user: string,
    content: string,
    userAvatar?: string,
    rating: number,
    countReviews: number,
    countFollowers: number,
    liked: number
}