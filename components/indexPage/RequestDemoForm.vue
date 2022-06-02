<template>
  <div class="form-wrapper">
    <h3 class="form-header">Request Form</h3>
    <span class="close-btn" @click="hide()">
      <fa :icon="['fa', 'xmark']" />
    </span>
    <form action="" class="form" @submit.prevent="handleSubmit">
      <div class="inputs-wrapper">
        <div class="input-wrapper">
          <label for="name" class="input-title">Name</label>
          <input
            id="name"
            v-model="values.name"
            required
            type="text"
            class="form-input"
            placeholder="Your Name"
            @blur="validate('name')"
            @keypress="validate('name')"
          />
          <span v-show="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div class="input-wrapper">
          <label for="email" class="input-title">Email</label>
          <input
            id="email"
            v-model="values.email"
            required
            type="email"
            class="form-input"
            placeholder="Your Email"
            @blur="validate('email')"
            @keypress="validate('email')"
          />
          <span v-show="errors.email" class="error">{{ errors.email }}</span>
        </div>
        <div class="input-wrapper">
          <label for="phone" class="input-title">Mobile Number</label>
          <input
            id="phone"
            v-model="values.phone"
            required
            type="number"
            class="form-input"
            placeholder="Your Mobile No"
            @keypress="validate('phone')"
            @change="validate('phone')"
            @blur="validate('phone')"
          />
          <span v-show="errors.phone" class="error">{{ errors.phone }}</span>
        </div>
        <div class="input-wrapper">
          <label for="restaurant" class="input-title">Restaurant</label>
          <input
            id="restaurant"
            v-model="values.restaurant"
            required
            type="text"
            class="form-input"
            placeholder="Your restaurant"
            @blur="validate('restaurant')"
            @keypress="validate('restaurant')"
          />
          <span v-show="errors.restaurant" class="error">{{
            errors.restaurant
          }}</span>
        </div>
        <!-- <div class="input-wrapper">
          <label for="location" class="input-title">Location</label>
          <input
            id="location"
            required
            type="text"
            class="form-input"
            placeholder="Your location"
          />
        </div> -->
      </div>

      <div class="btn-wrapper">
        <button
          :class="{
            'submit-btn': isValid,
            'submit-btn-disabled': !isValid,
            'submit-btn-success': status === 'success',
            'submit-btn-error': status === 'error',
          }"
          type="submit"
          :disabled="!isValid"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { object, string } from 'yup'

const requestDemoSchema = object().shape({
  name: string().required('Name is required'),
  email: string()
    .required('Email is required')
    .email('Input must be in email form'),
  phone: string()
    .required('Mobile number is required')
    .length(10, 'Number must be of 10 digits'),
  restaurant: string().required(),
})
export default {
  data() {
    return {
      status: 'idle',
      values: {
        name: '',
        email: '',
        phone: '',
        restaurant: '',
      },
      errors: {
        name: '',
        email: '',
        phone: '',
        restaurant: '',
      },
    }
  },
  computed: {
    isValid() {
      return Object.values(this.errors).every((val) => !val)
    },
  },
  methods: {
    handleSubmit() {
      requestDemoSchema
        .validate(this.values, { abortEarly: false })
        .then(() => {
          this.errors = {
            name: '',
            email: '',
            phone: '',
            restaurant: '',
          }

          this.$axios
            .$post('/api/form', {
              name: this.values.name,
              email: this.values.email,
              mobileNumber: this.values.phone,
              restaurantName: this.values.restaurant,
            })
            .then(() => {
              this.status = 'success'

              setTimeout(() => {
                this.status = 'idle'
              }, 1000)

              this.values = {
                name: '',
                email: '',
                phone: '',
                restaurant: '',
              }
            })
            .catch(() => {
              this.status = 'error'
              setTimeout(() => {
                this.status = 'idle'
              }, 1000)
            })
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors[error.path] = error.message
          })
        })
    },
    validate(field) {
      requestDemoSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = ''
        })
        .catch((err) => {
          this.errors[field] = err.message
        })
    },

    hide() {
      this.$modal.hide('request-form-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  border-radius: 25px;
  margin: auto;
  position: relative;
  min-width: 250px;
  max-width: 500px;
  width: fit-content;
  background-color: #fff;
  padding: 1.6rem;
  @include mq(md) {
    padding: 1.6rem 3.5rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @include color($text, dark-800);

  .error {
    @include color($colors, highlight);
    font-size: 12px;
    max-width: 200px;

    @include mq(xs) {
      max-width: 250px;
    }
  }
  .form-header {
    font-weight: 500;
    font-size: 18px;
    line-height: 148.1%;
    letter-spacing: -0.03em;
    position: relative;
    width: fit-content;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      border-radius: 10px;
      background-color: aqua;
      bottom: -5px;
      left: 0;
    }
  }

  .close-btn {
    position: absolute;
    cursor: pointer;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    @include color($text, dark-600);
  }
  .inputs-wrapper {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: fit-content;

      .input-title {
        font-weight: 400;
        font-size: 14px;
        line-height: 148.1%;
        width: fit-content;
        position: relative;

        &::before {
          position: absolute;
          content: '*';
          @include color($colors, highlight);
          right: -0.6rem;
        }
      }

      .form-input {
        --light-gray-46: rgba(150, 161, 164, 0.46);
        padding: 0.6rem 1rem;
        width: 200px;

        @include mq(xs) {
          width: 250px;
        }
        border: 1px solid var(--light-gray-46);
        border-radius: 7px;
        background-color: #fff;

        &::placeholder {
          font-weight: 500;
          font-size: 14px;
          line-height: 148.1%;
          color: var(--light-gray-46);
        }
      }
    }
  }
  .btn-wrapper {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    .submit-btn {
      cursor: pointer;
      padding: 0.5rem 2rem;
      border-radius: 5px;
      background-color: map-get($map: $colors, $key: primary);
      border: none;

      font-weight: 600;
      font-size: 1rem;
      line-height: 148.1%;
      color: #fff;
    }

    .submit-btn-success {
      cursor: pointer;
      padding: 0.5rem 2rem;
      border-radius: 5px;
      background-color: map-get($map: $colors, $key: success);
      border: none;

      font-weight: 600;
      font-size: 1rem;
      line-height: 148.1%;
      color: #fff;
    }
    .submit-btn-error {
      cursor: pointer;
      padding: 0.5rem 2rem;
      border-radius: 5px;
      background-color: map-get($map: $colors, $key: highlight);
      border: none;

      font-weight: 600;
      font-size: 1rem;
      line-height: 148.1%;
      color: #fff;
    }
    .submit-btn-disabled {
      background-color: rgba(150, 161, 164, 0.46);
      padding: 0.5rem 2rem;
      border-radius: 5px;
      border: none;

      font-weight: 600;
      font-size: 1rem;
      line-height: 148.1%;
      color: #fff;
    }
  }
}
</style>
