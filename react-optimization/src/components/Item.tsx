import { memo } from "react";

type ItemProps = {
  title: string;
  onAddToWishList: (item: string) => void;
}

function ItemComponent(props: ItemProps) {
  return (
    <li>
      {props.title}
      <button onClick={() => props.onAddToWishList(props.title)}>
        Add to WishList
      </button>
    </li>
  )
}

export const Item = memo(ItemComponent)