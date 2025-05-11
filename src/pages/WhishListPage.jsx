import WishCard from "../components/WhishCard"

export default function WhishListPage (){



    return (
        <section className="min-h-screen bg-gradient-to-br from-[rgba(36, 30, 30, 1)] to-[rgba(49, 30, 25, 1) p-6 ">
          <h1 className="text-3xl font-bold">Your Wishlist</h1>
          <WishCard />
        </section>
      );


}