import Vue from 'vue';
import { format } from 'date-fns';

Vue.filter('date', value => format(new Date(value), 'MMM dd, yyyy'));
