import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e6552f7b-1691-4e09-b3f9-ef6acb8f21f3");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Wiadmość wysłana poprawnie!",
                showConfirmButton: false,
                timer: 1500
              });
        }
      };



  return (
    <section className='flex justify-center items-center min-h-screen bg-white '>
        <form className='max-w-[600px] w-[80%] bg-white border-2 border-[#e18a33] rounded-lg m-6 py-8 px-12' onSubmit={onSubmit}>
            <h2 className='text-3xl text-center'>Formularz Kontaktowy</h2>
            <div className='mt-5'>
                <label>Imię i Nazwisko</label>
                <input type='text' className='w-[100%] h-12 bg-transparent border-2 border-grey outline-none rounded-md p-4 text-lg text-grey mt-2' placeholder='Wpisz swoje imię i nazwisko' name='name' required/>
            </div>
            <div className='mt-5'>
                <label>Email</label>
                <input type='email' className='w-[100%] h-12 bg-transparent border-2 border-grey outline-none rounded-md p-4 text-lg text-grey mt-2' placeholder='Wpisz swój email' name='email' required/>
            </div>
            <div className='mt-5'>
                <label>Twoja wiadomość</label>
                <textarea name="message" id="" className="w-[100%] h-[200px] bg-transparent border-2 border-grey outline-none rounded-md p-4 text-lg text-grey mt-2 resize-none" placeholder='Wpisz swoją wiadomość' required></textarea>
            </div>
            <button type='sumbit' className='w-[100%] h-14 bg-[#e18a33] border-none rounded-md cursor-pointer text-lg text-white font-medium mt-6 transition-[0.5] hover:bg-[#794e23]'>Wyślij Wiadomość</button>
        </form>
    </section>
  )
}

export default Contact
