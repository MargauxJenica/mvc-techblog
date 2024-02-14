const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');