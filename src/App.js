import './App.scss';
import { Controller, useForm } from "react-hook-form";
import InputField from './components/InputField';
import { Input, Button,Checkbox,FormControlLabel,Select,MenuItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


function App() {
  var { control, register, handleSubmit, watch, formState:{errors} } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="App">
      <form className="App__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
        control={control}
        name="name"
        defaultValue=""
        rules={{required:true,pattern:/peter/i}}
        render={({field,fieldState:{invalid,error }}) => (
          <>
          <Input {...field} placeholder="peter" error={error ? true:false}/>
          {error && <span>Du hedder ikke peter</span>}
          {invalid && <Alert severity="" >No Peter</Alert> }
          </>
          )}
        />
        <Controller
        control={control}
        name="Peter"
        defaultValue={true}
        rules={{required:true}}
        render={({field,fieldState:{invalid,error }}) => (
          <>
            <FormControlLabel control= {<Checkbox {...field} />} label="Peter?"/>
            {invalid && <Alert security="error">Du skal hedde Peter</Alert>}
          </>
          )}
        />
        <Controller
        control={control}
        name="Peter"
        defaultValue={true}
        rules={{required:true}}
        render={({field,fieldState:{invalid,error }}) => (
            <FormControlLabel control= {
              <Select {...field}>
                  <MenuItem>Peter1</MenuItem>
                  <MenuItem>Peter2</MenuItem>
                  <MenuItem>Peter3</MenuItem>
              </Select>
            } label="vælg dit navn på listen"/>
          )}
        />



      <Button color="primary" type="submit">Hello World</Button>
        <InputField
              register={register}
              name="name"
              type="text"
              label="navn"
              placeholder="peter"
        />
        
        <InputField
        register={register}
        name="email"
        type="email"
        label="E-mail"
        placeholder="din@email.dk"
        />
        <InputField
        register={register}
        name="tel"
        type="tel"
        label="Telefon"
        placeholder="+4534234567"
        />
        <InputField
        register={register}
        name="msg"
        type="textarea"
        label="Besked"
        placeholder="Skriv din besked"
        />



        {/* <div className="App__box">
        <label htmlFor="name">Navn</label>
        <input 
        type="text" 
        id="name" 
        placeholder="Navn" 
        {...register("name", {required:true})}
         />
      {errors.name && <span>Gør det nu rigtigt</span>}
        
        </div>
        <div className="App__box">
        <label htmlFor="name">Email</label>
        <input 
        type="text" 
        id="email" 
        placeholder="Email" 
        {...register("email", { required:true ,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
        {errors.email && <span>Helt ærligt!! kom nu</span>}
        </div>

        <div className="App__box">
        <label htmlFor="telefon">telefon</label>
        <input
          type="tel"
          id="tel"
          placeholder="004510203040"
          {...register("tel", { pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, required: true })}
          />
          {errors.tel && <span>bare være et nummer</span>}
        </div>

        <div className="App__boxMsg">
        <label htmlFor="Besked">besked</label>
        <textarea rows="10" placeholder="Skriv for fanen!!" {...register("msg",{required:true },
        {minLength:10, maxLength:500}
        )} id="msg">
        </textarea>
        <div>
        {watch("msg")?.length || 0}/500
        </div>
        {errors.msg && <span>skriv til mig</span>}
        </div> */}
        
        <div className="App__buttonContianer">
        <button className="App__boxbutton"type="submit">send</button>
        </div>
      </form>
    </div>
  );
}

export default App;
