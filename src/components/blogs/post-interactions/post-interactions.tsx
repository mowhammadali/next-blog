import React from "react";
import css from "@/components/blogs/post-interactions/post-interactions.module.css";
import Text from "@/ui/text/text";
import { Post } from "../post-list/post-list";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { FaRegCommentDots } from "react-icons/fa";

const PostInteractions = ({ isBookmarked, isLiked, comments }: Post) => {
    return (
        <div className={css.container}>
            <div className={css["comment-container"]}>
                <FaRegCommentDots className={css["comment-icon"]} />
                <Text as="p" color="var(--text-base-600)" fontSize="12px">
                    {comments.length}
                </Text>
            </div>
            {isLiked ? (
                <GoHeartFill className={css["heart-icon"]} />
            ) : (
                <GoHeart className={css["heart-icon"]} />
            )}
            {isBookmarked ? (
                <IoBookmark className={css["bookmark-icon"]} />
            ) : (
                <IoBookmarkOutline className={css["bookmark-icon"]} />
            )}
        </div>
    );
};

export default PostInteractions;
