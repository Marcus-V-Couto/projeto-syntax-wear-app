export const SubscriptionForm = () => {
  return (
    <form action="" className="flex flex-col items-center">
      <label htmlFor="newsletter">Inscreva-se em nosso e-mail</label>
      <input
        type="email"
        id="newsletter"
        name="newsletter"
        placeholder="email@email.com"
        className="rounded-[30px] bg-white py-3 px-5 placeholder-[#AAAAAA]"
      />
    </form>
  );
};
